class recipe {
    tieude:string;
    khauphan:number;
    thanhphan:string[];

    constructor(tieude: string, khauphan: number, thanhphan: string[]) {
        this.tieude = tieude;
        this.khauphan = khauphan;
        this.thanhphan = thanhphan;
    }
}
let Recipe:recipe = new recipe("Sườn xào chua ngọt",  2, ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh', '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)'])
console.log(Recipe)