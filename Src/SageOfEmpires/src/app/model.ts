type Nullable<T> = T | null;

export class Civ
{
    name;
}

export class PlayerColour {
    constructor(public colour: string, public id: number) {};
}

export enum PlayerColours {
    None = 0,
    Blue = 1,
    Red = 2,
    Green = 3,
    Yellow = 4,
    Cyan = 5,
    Pink = 6,
    Grey = 7,
    Orange = 8
}

export class TeamColourOptions{
    public static array: PlayerColour[] = [
        new PlayerColour("Blue", PlayerColours.Blue),
        new PlayerColour("Red", PlayerColours.Red),
        new PlayerColour("Green", PlayerColours.Green),
        new PlayerColour("Yellow", PlayerColours.Yellow),
        new PlayerColour("Cyan", PlayerColours.Cyan),
        new PlayerColour("Pink", PlayerColours.Pink),
        new PlayerColour("Grey", PlayerColours.Grey),
        new PlayerColour("Orange", PlayerColours.Orange)
    ];
}

export class Player
{
    constructor(public civ: Civ) {}

    playerColour?: PlayerColour;
    team?: number;

    getColour() : string {
        
        if(!this.playerColour){
            return "none";
        }

        return this.playerColour.colour;

        // var name = PlayerColours[this.number];

        // return name;
    }
}

export class Opponent extends Player
{
}
