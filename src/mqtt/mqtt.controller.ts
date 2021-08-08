import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {
    IAddClientRoleRequest,
    IAddGroupClientRequest,
    IAddGroupRoleRequest,
    IAddRoleACLRequest,
    ICreateClientRequest,
    ICreateGroupRequest,
    ICreateRoleRequest,
    IDeleteClientRequest,
    IDeleteRoleRequest,
    IDisableClientRequest,
    IEnableClientRequest,
    IListClientsRequest,
    IListGroupsRequest,
    IListRolesRequest,
    IRemoveClientRoleRequest,
    IRemoveGroupClientRequest,
    IRemoveGroupRoleRequest,
    IRemoveRoleACLRequest,
    ISetAnonymousGroupRequest,
    ISetClientIdRequest,
    ISetClientPasswordRequest,
    ISetDefaultACLAccessRequest,
    MqttService
} from '@hlutir/common';

@Controller('mqtt')
export class MqttController {
    constructor(private readonly mqttService: MqttService) {}

    //
    // General
    //

    @Get('defaultACLAccess')
    getDefaultACLAccess(): Promise<object> {
        return this.mqttService.getDefaultACLAccess({});
    }

    @Post('defaultACLAccess')
    setDefaultACLAccess(@Body() data: ISetDefaultACLAccessRequest): Promise<object> {
        return this.mqttService.setDefaultACLAccess(data);
    }

    @Get('anonymousGroup')
    getAnonymousGroup(): Promise<object> {
        return this.mqttService.getAnonymousGroup({});
    }

    @Post('anonymousGroup')
    setAnonymousGroup(@Body() data: ISetAnonymousGroupRequest): Promise<object> {
        return this.mqttService.setAnonymousGroup(data);
    }

    //
    // Clients
    //

    @Post('client')
    createClient(@Body() data: ICreateClientRequest): Promise<object> {
        return this.mqttService.createClient(data);
    }

    @Delete('client/:username')
    deleteClient(@Param('username') username: string): Promise<object> {
        return this.mqttService.deleteClient({ username });
    }

    @Put('client/:username/password')
    setClientPassword(@Param('username') username: string, @Body() data: ISetClientPasswordRequest): Promise<object> {
        data.username = username;
        return this.mqttService.setClientPassword(data);
    }

    @Put('client/:username/id')
    setClientId(@Param('username') username: string, @Body() data: ISetClientIdRequest): Promise<object> {
        data.username = username;
        return this.mqttService.setClientId(data);
    }

    @Put('client/:username/role')
    addClientRole(@Param('username') username: string, @Body() data: IAddClientRoleRequest): Promise<object> {
        data.username = username;
        return this.mqttService.addClientRole(data);
    }

    @Delete('client/:username/role')
    removeClientRole(@Param('username') username: string, @Body() data: IRemoveClientRoleRequest): Promise<object> {
        data.username = username;
        return this.mqttService.removeClientRole(data);
    }

    @Get('client/:username')
    getClient(@Param('username') username: string): Promise<object> {
        return this.mqttService.getClient({ username });
    }

    @Get('client')
    listClients(@Body() data: IListClientsRequest): Promise<object> {
        return this.mqttService.listClients(data);
    }

    @Put('client/:username/enable')
    enableClient(@Param('username') username: string): Promise<object> {
        return this.mqttService.enableClient({ username });
    }

    @Put('client/:username/disable')
    disableClient(@Param('username') username: string): Promise<object> {
        return this.mqttService.disableClient({ username });
    }

    //
    // Groups
    //

    @Post('group')
    createGroup(@Body() data: ICreateGroupRequest): Promise<object> {
        return this.mqttService.createGroup(data);
    }

    @Delete('group/:groupname')
    deleteGroup(@Param('groupname') groupname: string): Promise<object> {
        return this.mqttService.deleteGroup({ groupname });
    }

    @Put('group/:groupname/role')
    addGroupRole(@Param('groupname') groupname: string, @Body() data: IAddGroupRoleRequest): Promise<object> {
        data.groupname = groupname;
        return this.mqttService.addGroupRole(data);
    }

    @Delete('group/:groupname/role')
    removeGroupRole(@Param('groupname') groupname: string, @Body() data: IRemoveGroupRoleRequest): Promise<object> {
        data.groupname = groupname;
        return this.mqttService.removeGroupRole(data);
    }

    @Put('group/:groupname/client')
    addGroupClient(@Param('groupname') groupname: string, @Body() data: IAddGroupClientRequest): Promise<object> {
        data.groupname = groupname;
        return this.mqttService.addGroupClient(data);
    }

    @Delete('group/:groupname/client')
    removeGroupClient(@Param('groupname') groupname: string, @Body() data: IRemoveGroupClientRequest): Promise<object> {
        data.groupname = groupname;
        return this.mqttService.removeGroupClient(data);
    }

    @Get('group/:groupname')
    getGroup(@Param('groupname') groupname: string): Promise<object> {
        return this.mqttService.getGroup({ groupname });
    }

    @Get('group')
    listGroups(@Body() data: IListGroupsRequest): Promise<object> {
        return this.mqttService.listGroups(data);
    }

    //
    // Roles
    //

    @Post('role')
    createRole(@Body() data: ICreateRoleRequest): Promise<object> {
        return this.mqttService.createRole(data);
    }

    @Delete('role/:rolename')
    deleteRole(@Param('rolename') rolename: string): Promise<object> {
        return this.mqttService.deleteRole({ rolename });
    }

    @Put('role/:rolename/acl')
    addRoleACL(@Param('rolename') rolename: string, @Body() data: IAddRoleACLRequest): Promise<object> {
        data.rolename = rolename;
        return this.mqttService.addRoleACL(data);
    }

    @Delete('role/:rolename/acl')
    removeRoleACL(@Param('rolename') rolename: string, @Body() data: IRemoveRoleACLRequest): Promise<object> {
        data.rolename = rolename;
        return this.mqttService.removeRoleACL(data);
    }

    @Get('role/:rolename')
    getRole(@Param('rolename') rolename: string): Promise<object> {
        return this.mqttService.getRole({ rolename });
    }

    @Get('role')
    listRoles(@Body() data: IListRolesRequest): Promise<object> {
        return this.mqttService.listRoles(data);
    }
}
