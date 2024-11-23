class Settings {
    constructor(){
        this.defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ])
        this.values = new Map([
            ['theme', new Map([['light', true], ['gray', true]])],
            ['music', new Map([['pop', true], ['rock', true], ['chillout', true], ['off', true]])],
            ['difficulty', new Map([['normal', true], ['hard', true], ['nightmare', true]])]
        ]);

      
        this.userSettings = new Map();
    }
    setSettings(key, value){
        if(!this.values.has(key)){
            throw new Error('Ошибка')
        }

        if(!this.values.get(key).has(value)){
            throw new Error('такой темы нет')
        }

        this.userSettings.set(key, value);
    }

    get settings(){
        const newMapValues = new Map(this.defaultSettings)
        for(let [key, value] of this.userSettings){
            newMapValues.set(key, value);
        }
        return Object.fromEntries(newMapValues);
    }
}