type ClassValue = string | number | null | undefined | false | ClassValue[] | Record<string, boolean>

export function cn(...inputs:ClassValue[]):string{
    const classes: string[] = []
    for(const input of inputs){
        if(!input) continue;
        if(typeof input === 'string' || typeof input === "number"){
            classes.push(String(input))
        }else if(Array.isArray(input)){
            classes.push(cn(...input))
        }else if (typeof input === "object"){
            for(const [key, value] of Object.entries(input)){
                if(value) classes.push(key)
            }
        }
    }
    return classes.join(" ");
}