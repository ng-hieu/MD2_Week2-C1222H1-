import {Staff} from "./Staff";
import {StaffManager} from "./StaffManager";
let staff1 = new Staff(1, "Ng", "Long", "3/1/2001", "Haf Nooij", "Admin", )
let staff2 = new Staff(2, "Ng", "Hiu", "3/3/2003", "Haf Nooij", "Admin", )
//console.log(staff1.getAllInfo())
let manager = new StaffManager();
manager.add(staff1);
manager.add(staff2)
manager.showAllName()
manager.delete(1)
manager.showAllName()
manager.update(2, "H","Long", "3/1/2001", "Da Nag", "Usser")
manager.showAllName()