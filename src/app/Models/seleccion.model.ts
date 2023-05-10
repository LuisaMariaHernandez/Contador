export interface Seleccion {
    name:string;
    age: number;
    colors: string[];
    country_name: string;
    alt_names: string;
    top_scorer: Top_scorer
    players: Players;
}

export interface Top_scorer {
    name: string;
    number_goals: number;
}

export interface Players {
    name: string;
    age: number;
}


