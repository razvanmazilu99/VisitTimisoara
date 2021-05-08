export default class Attraction {
    name;
    description;
    image;
    image1;
    image2;
    latitude;
    longitude;
    type;
    zone;
    rating;

    constructor(id, name, description, image, image1, image2, latitude, longitude, type, zone, rating){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.image1 = image1;
        this.image2 = image2;
        this.latitude = latitude;
        this.longitude = longitude;
        this.type = type;
        this.zone = zone;
        this.rating = rating;
    }
}