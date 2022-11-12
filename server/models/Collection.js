class Collection {
    constructor(obj) {
        obj = obj != null ? obj : {}
        this.id = obj.objectid != null ? obj.objectid : ''
        this.name = obj.name.text != null ? obj.name.text : ''
        this.min_duration = obj.stats.minplaytime != null ? obj.stats.minplaytime : ''
        this.max_duration = obj.stats.maxplayers != null ? obj.stats.maxplayers : ''
        this.min_players = obj.stats.minplayers != null ? obj.stats.minplayers : ''
        this.max_players = obj.stats.maxplayers != null ? obj.stats.maxplayers : ''
        this.weight = obj.weight != null ? obj.weight : ''
        this.rating = obj.stats.rating.average.value != null ? obj.stats.rating.average.value : ''
        this.image_url = obj.image != null ? obj.image : ''
        this.mechanics = obj.mechanics != null ? obj.mechanics : ''
    }
}

module.exports = Collection 