//% weight=70 color=#3366CC icon=""
//% block="Array Stats"
namespace ArrayStats {
    let ArrayPart = ""
    let ArrayParts: string[] = []
    let useItems = ""
    let ArrayItems: any[] = []
    let StatsArray: any[][] = []
    let lastPickedRow: any[] = []
    enum NameTypes {
        //%block="List Stat Length"
        ListLength,
        //%block="Stat Length"
        StatLength,
    }

    
    //%block="Create Stat $stats with name $name2 for $name list"
    //%stats.shadow="lists_create_with"
    //%group="Create"
    export function create_stats(name: string, stats: any[], name2: string): void {
        let Statsitems = ""
        for (let i = 0; i < stats.length; i++) {
            Statsitems = Statsitems + stats[i] + "|"         
        }
        StatsArray.push(["" + name + "|" + name2 + "|" + Statsitems, stats])
    }

    //%block="get Stats from stat with name $name from list $list|| at index $index"
    //%group="Get"
    export function Get_stats(name: string, list: string, index?: number,): any {
        for (let i = 0; i < StatsArray.length; i++) {
            let row: any[] = StatsArray[i]

            useItems = row[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]

            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                if (index != undefined) {
                    let backup: any[] = row[1]

                    return ArrayParts[index] == "[object Object]" ? backup[index - 2] : ArrayParts[index]
                } else {
                    return useItems
                }
            }
        }
        return undefined
    }
    //%block="Change Stats with name $name from list $list to $stats with new name $name2"
    //%stats.shadow="lists_create_with"
    //%group="Change"
    export function change_stats(name: string, list: string, stats: any[], name2: string): void {
        let Statsitems = ""
        for (let i = 0; i < stats.length; i++) {
            Statsitems = Statsitems + stats[i] + "|"
        }
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                StatsArray[i] = ["" + list + "|" + name2 + "|" + Statsitems, stats]
            }
        }
    }
    //%block="get Random Stat from list with name $name || at index $index"
    //%group="Get"
    //%draggableParameters="reporter"
    export function Get_random_stats(name: string, index?: number): any {
        let matches: any[] = []
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            if (ArrayParts[0] == name) {
                matches.push(StatsArray[i])
            }
        }
        if (matches.length > 0) {
            let randomIndex = randint(0, matches.length - 1)
            let row: any[] = matches[randomIndex]
            lastPickedRow = row
            if (index != undefined) {
                let parts = (row[0] as string).split("|")
                let backup: any[] = row[1] 

                return parts[index] == "[object Object]" ? backup[index - 2] : parts[index]
            } else {
                return row[0]
            }
        }
        return undefined
    }
    //%block="Create Stat $stats with name $name2 for $name list"
    //%stats.shadow="lists_create_with"
    //%group="Create"
    export function create_stats_get(name: string, stats: any[], name2: string): any {
        let Statsitems = ""
        for (let i = 0; i < stats.length; i++) {
            Statsitems = Statsitems + stats[i] + "|"
        }
        StatsArray.push(["" + name + "|" + name2 + "|" + Statsitems,stats])
        return ["" + name + "|" + name2 + "|" + Statsitems,stats]
    }
    //%block="Change Stats with name $name from list $list to $stats with new name $name2"
    //%stats.shadow="lists_create_with"
    //%group="Change"
    export function change_stats_get(name: string, list: string, stats: any[], name2: string): any {
        let Statsitems = ""
        for (let i = 0; i < stats.length; i++) {
            Statsitems = Statsitems + stats[i] + "|"
        }
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                StatsArray[i] = ["" + list + "|" + name2 + "|" + Statsitems,stats]
                return ["" + list + "|" + name2 + "|" + Statsitems, stats]
            }
        }
    }
    //block="length of stat with name $name for list $list"
    //group="values"
    /*
    export function length_of_stats(list: string,name: string): any {
        let Length = 0
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                Length++
            }
        }
        return Length
    */
    //%block="length of list with name $list"
    //%group="Values"
    export function length_of_list(list: string): any {
        let Length = 0
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[0] == list) {
                Length++
            }
        }
        return Length
    }
    //%block="length of stat with name $name for list $list"
    //%group="Values"
    export function length_of_stats(name: string, list: string): any {
        let Length = 0
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                return ArrayParts.length - 3
            }
        }
        return ArrayParts.length - 3
    }

    //%block="get stat from last random picked stat at index $index"
    //%group="Get"
    export function Get_last_picked(index: number): any {
        if (lastPickedRow.length == 0) return undefined
        let parts = (lastPickedRow[0] as string).split("|")
        let backup: any[] = lastPickedRow[1]
        return parts[index] == "[object Object]" ? backup[index - 2] : parts[index]
    }
    //%block="Remove Stat with name $name from list $list"
    //%group="Remove"
    export function Remove_stats(name: string, list: string): void {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                StatsArray.splice(StatsArray.indexOf(ArrayItems),1)
            }
        }
    }
    //%block="Check if stat with name $name exists"
    //%group="Check"
    export function Check_stats(name: string): boolean {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name) {
                return true
            }
        }
        return false
    }
    //%block="Check if list with name $list exists"
    //%group="Check"
    export function Check_stats_list(list: string): boolean {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[0] == list) {
                return true
            }
        }
        return false
    }
    //%block="Get Every Stat from list $list at index $index"
    //%group="Get"
    export function Get_stats_name(list: string, index: number): any {
        let Log = ""
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[0] == list) {
                Log = Log + ArrayParts[index] + "|"
            }
        }
        return Log
    }
    //%block="Rename List with name $list to $list2"
    //%group="Rename"
    export function change_stats_list_name(list2: string, list: string): void {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[0] == list) {
                let Statsitems = useItems
                let SplitStatsitems = Statsitems.split("|")
                SplitStatsitems[0] = list2
                let JoinStatsitems = SplitStatsitems.join("|")
                let UsedItems = JoinStatsitems.split("|")
                let Items = ""
                for (let i = 0; i < UsedItems.length; i++) {
                    Items = Items + UsedItems[i] + "|"
                }
                StatsArray[i] = [Items]
            }
        }
    }
    //%block="Rename Stat with name $name in list $list to new name $name2"
    //%group="Rename"
    export function change_stats_name(name: string, list: string, name2: string): void {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                let Statsitems = useItems
                let SplitStatsitems = Statsitems.split("|")
                SplitStatsitems[1] = name2
                let JoinStatsitems = SplitStatsitems.join("|")
                let UsedItems = JoinStatsitems.split("|")
                let Items = ""
                for (let i = 0; i < UsedItems.length; i++) {
                    Items = Items + UsedItems[i] + "|"
                }
                StatsArray[i] = [Items]
            }
        }
    }
    //%block="Amount Of Stats Created"
    //%group="Debugging/Saving"
    export function Get_stats_length(): any {
        return StatsArray.length
    }
    //%block="Every Single Stat"
    //%group="Debugging/Saving"
    export function Get_stats_array(): any {
        let Log = ""
        for (let i = 0; i < StatsArray.length; i++) {
            Log = Log + StatsArray[i][0]
        }
        return Log
    }
    //%block="Every Single Stat in $list List"
    //%group="Debugging/Saving"
    export function Get_stats_array_name(list: string): any {
        let Log = ""
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[0] == list) {
                Log = Log + ArrayItems[0]
            }
        }
        return Log
    }
    //%block="Check if list with name $list Contains Stat with name $name"
    //%group="Check"
    export function Check_stats_and_list(list: string, name: string): boolean {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[0] == list && ArrayParts[1] == name) {
                return true
            }
        }
        return false
    }
    //%block="Find Stat in List $list containing $item || at index $index"
    //%group="Find"
    export function Find_Stat(list: string, item: any, index?: number): any {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            for (let i2 = 0; i2 < ArrayParts.length; i2++) {
            if (index != undefined) {
            if (ArrayParts[0] == list && ArrayParts[index] == item) {
                return StatsArray[i]
            }
            }else {
            if (ArrayParts[0] == list && ArrayParts[i2] == item) {
                return StatsArray[i]
            }
            }
            }
        }
        return false
    }
    //% block="get Stats from stat from index $index from list $list|| at index $index2"
    //% group="Get"
    export function Get_stats_index(index: number, list: string, index2?: number): any {
        let foundIndex = 0;
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            if (ArrayParts[0] == list) {
                if (foundIndex == index) {
                    if (index2 != undefined) {
                        return ArrayParts[index2];
                    } else {
                        return StatsArray[i];
                    }
                }
                foundIndex++;
            }
        }
        return false;
    }
    //% block="Change Stat with name $name from list $list item at index $index to $stat"
    //% group="Change"
    export function change_stats_index(name: string, list: string, index: number, stat: any): void {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                let Statsitems = useItems
                let SplitStatsitems = Statsitems.split("|")
                SplitStatsitems[index] = stat
                let JoinStatsitems = SplitStatsitems.join("|")
                let UsedItems = JoinStatsitems.split("|")
                let Items = ""
                for (let i = 0; i < UsedItems.length; i++) {
                    Items = Items + UsedItems[i] + "|"
                }
                StatsArray[i] = [Items]
            }
        }
    }
    //% block="Add $stat to stat with name $name from list $list"
    //% group="Add"
    export function Add_Stat(name: string, list: string, stat: any): void {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                let Statsitems = useItems
                let SplitStatsitems = Statsitems.split("|")
                SplitStatsitems.push(stat)
                let JoinStatsitems = SplitStatsitems.join("|")
                let UsedItems = JoinStatsitems.split("|")
                let Items = ""
                for (let i = 0; i < UsedItems.length; i++) {
                    if (i !== UsedItems.length - 2) {
                    Items = Items + UsedItems[i] + "|"
                    }
                }
                StatsArray[i] = [Items]
            }
        }
    }
}