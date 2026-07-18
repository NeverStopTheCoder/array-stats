//% weight=70 color=#3366CC icon=""
//% block="Array Stats"
namespace ArrayStats {
    let ArrayPart = ""
    let ArrayParts: string[] = []
    let useItems = ""
    let ArrayItems: string[] = []
    let StatsArray: string[][] = []


    
    //%block="Create Stat $stats with name $name2 for $name list"
    //%stats.shadow="lists_create_with"
    //%group="Create"
    export function create_stats(name: string, stats: any[], name2: string): void {
        let Statsitems = ""
        for (let i = 0; i < stats.length; i++) {
            Statsitems = Statsitems + stats[i] + "|"         
        }
        StatsArray.push(["" + name + "|" + name2 + "|" + Statsitems])
    }

    //%block="get Stats from stat with name $name from list $list|| at index $index"
    //%group="Get"
    export function Get_stats(name: string, list: string, index?: number,): any {
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            ArrayPart = ArrayParts[0]
            if (ArrayParts[1] == name && ArrayParts[0] == list) {
                if (index != undefined) {
                    return ArrayParts[index]
                }else {
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
        let matches: string[] = []
        for (let i = 0; i < StatsArray.length; i++) {
            ArrayItems = StatsArray[i]
            useItems = ArrayItems[0]
            ArrayParts = useItems.split("|")
            if (ArrayParts[0] == name) {
                matches.push(useItems) 
            }
        }
        if (matches.length > 0) {
            let randomIndex = randint(0, matches.length - 1)
            if (index != undefined) {
                let parts = matches[randomIndex].split("|")
                return parts[index] 
            } else {
                return matches[randomIndex]
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
}