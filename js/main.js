var bike ={
    bikename:"splendor",
    brand:"hero",
    varient:"petrol",
    color:"black",
    price:80000,
    tax:500,
    mileage:60,
    person_capacity:4,
    sum(){
        let total=this.tax+this.price;
        return total;
    }
}
document.write(`The select the brnad:${bike.brand}`,"<br>");
document.write("<br");
document.write(`keys bike is a: ${Object.keys(bike)}`,"<br>");
document.write(`values bike  is a: ${Object.values(bike)}`,"<br>");
document.write(`entries bike is a: ${Object.entries(bike)}`,"<br>");
document.write(`total:${bike .sum()}`,"<br>");


var watch={
    watchname:"Talk s",
    brand:"titan",
    varient:"boys",
    color:"black",
    price:8000,
    tax:500,
    type:"smartwatch",
    size:"free size",
    sum(){
        let total=this.tax+this.price;
        return total;
    }
}
document.write(`The select the brnad:${watch.brand}`,"<br>");
document.write("<br");
document.write(`keys watch is a: ${Object.keys(watch)}`,"<br>");
document.write(`values watch  is a: ${Object.values(watch)}`,"<br>");
document.write(`entries watch  is a: ${Object.entries(watch)}`,"<br>");
document.write(`total:${watch.sum()}`,"<br>");

var camera={
    cameraname:"DSLR camera",
    brand:"canon",
    model_names:"EoS",
    color:"black",
    price:30499,
    sensor_type:"CMOS",
    type:"DSLR",
    tax:5000,
    sum(){
        let total=this.tax+this.price;
        return total;
    }
}
document.write(`The select the brnad:${camera.brand}`,"<br>");
document.write("<br");
document.write(`keys camera is a: ${Object.keys(camera)}`,"<br>");
document.write(`values camera is a: ${Object.values(camera)}`,"<br>");
document.write(`entries camera is a: ${Object.entries(camera)}`,"<br>");
document.write(`total:${camera.sum()}`,"<br>");

var fan={
    fanname:"candes",
    brand:"usha",
    model_names:"Brio turbo high speed decorative",
    color:"black",
    price:1159,
    power_requirement:"230v/50hz",
    tax:5000,
    sum(){
        let total=this.tax+this.price;
        return total;
    }
}
document.write(`The select the brnad:${fan.brand}`,"<br>");
document.write("<br");
document.write(`keys fan is a: ${Object.keys(fan)}`,"<br>");
document.write(`values fan is a: ${Object.values(fan)}`,"<br>");
document.write(`entries fan is a: ${Object.entries(fan)}`,"<br>");
document.write(`total:${fan.sum()}`,"<br>");


var speakers={
    speakersname:"home theater",
    brand:"boat",
    model_names:"Aavante bar 2000",
    color:"black",
    price:1099,
    type:"soundbar",
    tax:500,
    sum(){
        let total=this.tax+this.price;
        return total;
    }
}
document.write(`The select the brnad:${speakers.brand}`,"<br>");
document.write("<br");
document.write(`keys speakers is a: ${Object.keys(speakers)}`,"<br>");
document.write(`values speakers is a: ${Object.values(speakers)}`,"<br>");
document.write(`entries speakers is a: ${Object.entries(speakers)}`,"<br>");
document.write(`total:${speakers.sum()}`,"<br>");
