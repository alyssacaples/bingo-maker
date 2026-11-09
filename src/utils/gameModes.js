// The three games people actually play with these cards.
//
// The generator was built for one of them. Its subtitle default, "Walk around
// the room and get signatures...", printed on all 181 templates, so a Paris
// Travel card told you to go and collect signatures. The library outgrew the
// tool; this is the tool catching up.
//
// A mode sets the instruction line on the card and, for a called game, adds a
// caller's sheet to the back of the PDF. It changes nothing else, so picking
// the wrong one costs a click.

export const GAME_MODES = [
  {
    id: 'signature',
    label: 'Signature hunt',
    hint: 'Players find someone each square describes and get their signature.',
    subtitle:
      'Walk around the room and get signatures of others who agree with the item in the box.',
  },
  {
    id: 'observation',
    label: 'Spot it',
    hint: 'Players cross off squares themselves as things happen.',
    subtitle: 'Cross off each square as you go.',
  },
  {
    id: 'called',
    label: 'Called game',
    hint: 'A host reads items out. Your PDF gets a caller’s sheet at the back.',
    subtitle: 'Mark a square each time the host calls it out.',
  },
];

// What a card with no template behind it gets. Deliberately the mode this app
// has always assumed, so someone typing their own phrases on the homepage sees
// exactly what they saw before this existed.
export const DEFAULT_GAME_MODE = 'signature';

export const getGameMode = (id) =>
  GAME_MODES.find((mode) => mode.id === id) || GAME_MODES[0];

export const getModeSubtitle = (id) => getGameMode(id).subtitle;

// Every subtitle this app has ever shipped as a default. Used to tell an
// untouched subtitle from one someone wrote, so switching mode can replace the
// first and must never replace the second.
export const MODE_SUBTITLES = GAME_MODES.map((mode) => mode.subtitle);
