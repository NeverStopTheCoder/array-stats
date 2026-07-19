//% weight=70 color=#3366CC icon=""
//% block="Array Stats"
namespace ArrayStats {
    let ArrayPart = ""
    let ArrayParts: string[] = []
    let useItems = ""
    let ArrayItems: any[] = []
    let StatsArray: any[][] = []
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
    //%block="Change Stats with name $name from list $list to $stats"
    //%stats.shadow="lists_create_with"
    //%group="Change"
    export function change_stats(name: string, list: string, stats: any[]): void {
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
                StatsArray[i] = ["" + list + "|" + name + "|" + Statsitems]
            }
        }
    }
    //%block="get Random Stat from list with name $name || at index $index"
    //%group="Get"
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
        StatsArray.push(["" + name + "|" + name2 + "|" + Statsitems])
        return ["" + name + "|" + name2 + "|" + Statsitems]
    }
    //%block="Change Stats with name $name from list $list to $stats"
    //%stats.shadow="lists_create_with"
    //%group="Change"
    export function change_stats_get(name: string, list: string, stats: any[]): any {
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
                StatsArray[i] = ["" + list + "|" + name + "|" + Statsitems]
                return ["" + list + "|" + name + "|" + Statsitems]
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
    //%group="values"
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
}