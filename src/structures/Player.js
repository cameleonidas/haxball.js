/**
 *
 *
 * @class Player
 */
class Player {
    /**
     * Creates an instance of Player.
     * @param {*} client
     * @param {*} player
     * @memberof Player
     */
    constructor(client, player) {
        this.client = client;
        this.player = player;

        this._patch(player);
    }

    _patch(player) {
        this.player = player;
    }

    /**
     *
     *
     * @readonly
     * @memberof Player
     */
    get id() {
        return this.player.id;
    }

    /**
     *
     *
     * @readonly
     * @memberof Player
     */
    get name() {
        return this.player.name;
    }

    /**
     *
     *
     * @readonly
     * @memberof Player
     */
    get team() {
        return this.player.team;
    }

    /**
     *
     *
     * @readonly
     * @memberof Player
     */
    get admin() {
        return this.player.admin;
    }

    /**
     *
     *
     * @readonly
     * @memberof Player
     */
    get position() {
        return this.player.position;
    }

    /**
     *
     *
     * @readonly
     * @memberof Player
     */
    get auth() {
        return this.player.auth;
    }

    /**
     *
     *
     * @readonly
     * @memberof Player
     */
    get conn() {
        return this.player.conn;
    }

    /**
     *
     *
     * @param {*} message
     * @return {*}
     * @memberof Player
     */
    send(message) {
        return new Promise((resolve, reject) => {
            const promise = this.client.room.evaluate(`(() => { return room.sendChat(\`${message}\`, ${this.player.id})})()`);

            promise.then((p) => resolve(p)).catch((error) => reject(new Error(error)));
        });
    }

    /**
     *
     *
     * @param {*} admin
     * @return {*}
     * @memberof Player
     */
    setAdmin(admin) {
        return new Promise((resolve, reject) => {
            if (!admin) reject(new TypeError("Value must be Boolean."));

            const promise = this.client.room.evaluate(`(() => { return room.setPlayerAdmin(${this.player.id}, ${admin})})()`);

            promise.then((p) => resolve(p)).catch((error) => reject(new Error(error)));
        });
    }

    /**
     *
     *
     * @param {*} team
     * @return {*}
     * @memberof Player
     */
    setTeam(team) {
        return new Promise((resolve, reject) => {
            if (isNaN(team)) reject(new TypeError("Value must be Integer."));

            const promise = this.client.room.evaluate(`(() => { return room.setPlayerTeam(${this.player.id}, ${team})})()`);

            promise.then((p) => resolve(p)).catch((error) => reject(new Error(error)));
        });
    }

    /**
     *
     *
     * @param {*} avatar
     * @return {*}
     * @memberof Player
     */
    setAvatar(avatar) {
        return new Promise((resolve, reject) => {
            if (isNaN(avatar)) reject(new TypeError("Value must be Integer."));

            const promise = this.client.room.evaluate(`(() => { return room.setPlayerAvatar(${this.player.id}, ${avatar})})()`);

            promise.then((p) => resolve(p)).catch((error) => reject(new Error(error)));
        });
    }

    /**
     *
     *
     * @param {*} properties
     * @return {*}
     * @memberof Player
     */
    setDiscProperties(properties) {
        return new Promise((resolve, reject) => {
            const promise = this.client.room.evaluate(`(() => { return room.setPlayerDiscProperties(${this.player.id}, ${properties})})()`);

            promise.then((p) => resolve(p)).catch((error) => reject(new Error(error)));
        });
    }

    /**
     *
     *
     * @return {*}
     * @memberof Player
     */
    getDiscProperties() {
        return new Promise((resolve, reject) => {
            const promise = this.client.room.evaluate(`(() => { return room.getPlayerDiscProperties(${this.player.id})})()`);

            promise.then((p) => resolve(p)).catch((error) => reject(new Error(error)));
        });
    }

    /**
     *
     *
     * @param {*} reason
     * @param {*} ban
     * @return {*}
     * @memberof Player
     */
    kick(reason, ban) {
        return new Promise((resolve, reject) => {
            if (!ban) reject(new TypeError("Value must be Boolean."));

            const promise = this.client.room.evaluate(`(() => { return room.kickPlayer(${this.player.id}, "${reason}", ${ban})})()`);

            promise.then((p) => resolve(p)).catch((error) => reject(new Error(error)));
        });
    }
}

module.exports = Player;
