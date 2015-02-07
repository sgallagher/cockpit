/**
 * Domain Controller Module
 * Copyright 2015 - Stephen Gallagher <sgallagh@redhat.com>
 *
 *  This file is part of Cockpit (http://cockpit-project.org)
 *
 *  Cockpit is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 2.1 of the License, or
 *  (at your option) any later version.
 *
 *  Cockpit is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Cockpit.  If not, see <http://www.gnu.org/licenses/>.
 */

var service = cockpit.dbus('org.fedoraproject.rolekit1');
var dcrole = service.proxy(
    'org.fedoraproject.rolekit1.role',
    '/org/fedoraproject/rolekit1/roles/domaincontroller');
