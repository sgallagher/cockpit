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

function deploy_domain() {
    var settings = { "admin_password": cockpit.variant("s", admin_pw.val()) }
    /* TODO: use the machine's domain name for the instance name */
    var deploy_args = [ "dc", settings ]
    var call = dcrole.call("deploy", deploy_args)
    call.fail(deploy_fail)
    feedback.empty();
}

function deploy_fail(err) {
    feedback.text(err.message)
}
