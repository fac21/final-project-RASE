
BEGIN;

DROP TABLE IF EXISTS user_table, sessions_table, itineraries_table, imgs_table, mapspoints_table, reviews_table CASCADE;

CREATE TABLE user_table (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL 
);

CREATE TABLE sessions_table (
   sid TEXT PRIMARY KEY,
   data JSON NOT NULL
);

CREATE TABLE itineraries_table (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user_table(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    country TEXT NOT NULL,
    need_car BOOLEAN NOT NULL,
    budget DECIMAL,
    duration INTEGER NOT NULL,
    description JSON NOT NULL,
    created_at TIMESTAMP
);


CREATE TABLE imgs_table (
    id SERIAL PRIMARY KEY,
    itinerary_id INTEGER REFERENCES itineraries_table(id) ON DELETE CASCADE,
    img BYTEA
);

CREATE TABLE mapspoints_table (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user_table(id) ON DELETE CASCADE,
    itinerary_id INTEGER REFERENCES itineraries_table(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    longitude DECIMAL,
    latitude DECIMAL
);


CREATE TABLE reviews_table (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES user_table(id) ON DELETE CASCADE,
    stars INTEGER NOT NULL,
    review TEXT NOT NULL,
    itinerary_id INTEGER REFERENCES itineraries_table(id) ON DELETE CASCADE,
    created_at TIMESTAMP
);

INSERT INTO user_table (email, password, username) VALUES
(
  'test@gmail.com',
  '$2a$10$vzgLAxSa1k293giKSbVWi.GgSGmb1JB/kD1qWIg.mrUlt7UwVDCWG',
  'Test Testington'
);

INSERT INTO sessions_table (sid, data) VALUES
(
  'abc123',
  '{"test":"stuff"}'
);

INSERT INTO itineraries_table ( user_id, name, country, need_car, budget, duration, description, created_at) VALUES
  (1, 'Southwest England', 'England', TRUE, 1400, 10, '{"description": "Day One- Oxford, Stratford Upon Avon Day Two: Cotswolds Day Three: Bath, Wells, Glastonbury Day Four: Exmoor National Park, Croyde Bay, (Barnstaple), Bude Day Five: Cornwall- Tintagel, Saint Michael’s Mount, Land’s End, Minack Theatre, Mousehole Day Six: Lizard Point, Pendennis Castle, Dartmoor National Park, Exeter Day Seven: Beer, Seaton Down, Lyme Regis, Durdle Door, Lulworth Cove Day Eight: Portsmouth, Arundel, Brighton Day Nine: Brighton, Beachy Head, Rye Day ten: Rye, White Cliffs of Dover, Canterbury"}', (SELECT CURRENT_TIMESTAMP));

COMMIT;