export default class Attraction {
    name;
    description;
    image;
    latitude;
    longitude;
    type;
    zone;
    rating;

    constructor(id, name, description, image, latitude, longitude, type, zone, rating){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.latitude = latitude;
        this.longitude = longitude;
        this.type = type;
        this.zone = zone;
        this.rating = rating;
    }
}