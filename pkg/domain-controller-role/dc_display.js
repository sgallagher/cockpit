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

$(dcrole).on("InstanceAdded", display_domain);
$(dcrole).on("InstanceRemoved", display_domain);

function display_domain() {
    dcrole.call('getInstances').done(function(instances) {
        if (!instances[0].length) {
            current.text("No domain configured")
        } else {
            console.log("Instance:", instances[0][0])
            /* The domain controller can serve only one instance */
            var dcinstance = service.proxy(
                    'org.fedoraproject.rolekit1.role.instance',
                    instances[0][0])

            $(dcinstance).on("changed", function() {
                current.text(dcinstance.data['domain_name'])
            })

            current.text(dcinstance.data['domain_name'])
        }
    }) // .done()
}
