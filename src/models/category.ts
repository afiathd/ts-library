
export class Category {
    constructor(public name: string) {}
  }
  
export class Fiction extends Category {
    public genre: string;
    constructor(name: string, genre: string) {
        super(name);
        this.genre = genre;
    }
}

export class Romantic extends Category {
    public story: string;
    constructor(name: string, story: string) {
        super(name);
        this.story = story;
    }
}

export class Classic extends Category {
    public style: string;
    constructor(name: string, style: string) {
        super(name);
        this.style = style;
    }
}

export class History extends Category {
    public period: string;
    constructor(name: string, period: string) {
        super(name);
        this.period = period;
    }
}
  