
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('moves').del(),

    // Inserts seed entries
    knex('moves').insert({
      id: 1,
      name: 'Top Rock',
      class: 'style',
      description: 'Toprock is a major element of b-boying and b-girling. It generally refers to foot movement performed from a standing position, relying upon a mixture of coordination, flexibility, rhythm, and most importantly, style.',
      difficulty: 1}),
    knex('moves').insert({
      id: 2,
      name: 'Windmill',
      class: 'power',
      description: 'The breaker rolls his torso continuously in a circular path on the floor, across the upper chest/shoulders/back, while twirling his legs in a V-shape through the air.',
      difficulty: 3}),
    knex('moves').insert({
      id: 3,
      name: 'Three-Step',
      class: 'basic',
      description: 'The 3-step is a fundamental dance move that is often one of the first footwork sequence learned by breakdancers.',
      difficulty: 1}),
    knex('moves').insert({
      id: 4,
      name: 'Swipes',
      class: 'power',
      description: 'The Swipe is one of the most recognizable power moves in b-boying. The b-boy or b-girl leans back, whips his or her arms to one side to touch the ground, and his or her legs follow closely behind, twisting 360 degrees to land on the ground once again.',
      difficulty: 2}),
    knex('moves').insert({
      id: 5,
      name: 'Baby Swipes',
      class: 'style',
      description: 'Essentially a footwork move, often launched from the 6-step, that employs a twist of the hips similar to the swipe.',
      difficulty: 2}),
    knex('moves').insert({
      id: 6,
      name: 'Drops',
      class: 'basic',
      description: 'Drops are techniques that allow b-boys to transition down to the floor and begin performing downrock.',
      difficulty: 1}),
    knex('moves').insert({
      id: 7,
      name: 'Flares',
      class: 'power',
      description: 'The flare is an acrobatic move in which the performer alternates balancing the torso between either arm while swinging the legs beneath in continuous circles.',
      difficulty: 4}),
    knex('moves').insert({
      id: 8,
      name: 'Six-Step',
      class: 'style',
      description: 'The 6-step is foundational to b-boying not only because it is the first footwork sequence breakers often learn, but also because it remains the move around which many sets are structured.',
      difficulty: 4}),
    knex('moves').insert({
      id: 9,
      name: '1990',
      class: 'power',
      description: 'The 1990 is a move which resembles a rapidly spinning handstand on one hand.',
      difficulty: 4}),
    knex('moves').insert({
      id: 10,
      name: '2000',
      class: 'power',
      description: 'Like the 1990, it resembles a rapidly spinning handstand except the free hand from the 1990 is on top of the spinning hand.',
      difficulty: 4}),
    knex('moves').insert({
      id: 11,
      name: 'Freezes',
      class: 'style',
      description: 'A freeze is a b-boying technique that involves halting all body motion, often in an interesting or balance-intensive position.',
      difficulty: 4}),
    knex('moves').insert({
      id: 12,
      name: 'Backspin',
      class: 'basic',
      description: "A spin is a b-boying move that involves rotation of the breaker's body about some axis in contact with the ground.",
      difficulty: 4}),
    knex('moves').insert({
      id: 13,
      name: 'Airflare',
      class: 'power',
      description: "The Airflare refers to an acrobatic maneuver in which the performer rotates the torso around the vertical axis of their body while traveling in a circular path along a plane in parallel with the floor. It is recommended that this move is tried on mats",
      difficulty: 5}),
    knex('moves').insert({
      id: 14,
      name: 'Uprock',
      class: 'basic',
      description: "The dance consists of foot shuffles, spins, turns, freestyle movements",
      difficulty: 5}),
    knex('moves').insert({
      id: 15,
      name: 'Threading',
      class: 'style',
      description: "Threading is a often a footwork tech done by bboys and bbgirls in the dance of bboying. It creates an illusion as if some part of the body is being continually threaded.",
      difficulty: 3}),
    knex('moves').insert({
      id: 16,
      name: 'Air Chair',
      class: 'style',
      description: " A type of freeze in which the breaker stabs their elbow into their side and balances on it while keeping their legs and body in the air pointed towards the ceiling.",
      difficulty: 4})
  );
};
