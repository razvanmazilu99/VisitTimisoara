export default class Attraction {
    id;
    name;
    description;
    image;
    location;
    type;
    zone;
    rating;

    constructor(id, name, description, image, location, type, zone, rating){
        this.is = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.location = location;
        this.type = type;
        this.zone = zone;
        this.rating = rating;
    }
}
