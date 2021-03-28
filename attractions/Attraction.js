export default class Attraction {
    name;
    description;
    image;
    location;
    type;
    zone;
    rating;

    constructor(name, description, image, location, type, zone, rating){
        this.name = name;
        this.description = description;
        this.image = image;
        this.location = location;
        this.type = type;
        this.zone = zone;
        this.rating = rating;
    }
}
