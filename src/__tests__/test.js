import Settings from '../index';

test('смена темы на светлую', () => {
  const settings = new Settings();

  settings.setSettings('theme', 'light');
  expect(settings.settings.theme).toBe('light');
});

test('невозможный вариант', () => {
  const settings = new Settings();

  expect(() => settings.setSettings('music', 'RnB')).toThrow('установлено несуществующее значение');
});
