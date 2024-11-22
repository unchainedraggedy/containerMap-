class Settings {
    constructor(){
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ])
        this.values = new Map([
            ['theme', new Map(['light', true], ['gray', true])],
            ['music', new Map(['pop', true], ['rock', true], ['chillout', true], ['off', true])],
            ['difficulty', new Map(['normal', true], ['hard', true], ['nightmare', true])]
        ]);
        this.userSettings = {};
    }

}