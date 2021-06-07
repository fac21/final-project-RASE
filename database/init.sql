
BEGIN;

DROP TABLE IF EXISTS user_table, sessions_table, itineraries_table CASCADE;

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
    img TEXT,
    country TEXT NOT NULL,
    need_car BOOLEAN NOT NULL,
    budget DECIMAL,
    duration INTEGER NOT NULL,
    description TEXT NOT NULL,
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

INSERT INTO itineraries_table (user_id, name, img, country, need_car, budget, duration, description, created_at) VALUES
  (1, 'Southwest England', 'England', '/cornwall.jpg', TRUE, 1400, 10, 'Day One Oxford, Stratford Upon Avon Day Two: Cotswolds Day Three: Bath, Wells, Glastonbury Day Four: Exmoor National Park, Croyde Bay, (Barnstaple), Bude Day Five: Cornwall- Tintagel, Saint Michaels Mount, Lands End, Minack Theatre, Mousehole Day Six: Lizard Point, Pendennis Castle, Dartmoor National Park, Exeter Day Seven: Beer, Seaton Down, Lyme Regis, Durdle Door, Lulworth Cove Day Eight: Portsmouth, Arundel, Brighton Day Nine: Brighton, Beachy Head, Rye Day Ten: Rye, White Cliffs of Dover, Canterbury', (SELECT CURRENT_TIMESTAMP)),
  (1, '3 Day Trip to Cambridge', 'England', '/.london.jpg', FALSE, 300, 3, 'Day 1 The Backs, Kings College Chapel Day 2 Fitzwilliam Museum, Queens College Hall Day 3 Cambridge University Botanic Garden, Bletchley Park', (SELECT CURRENT_TIMESTAMP)),
  (1, '3 Day Trip to Broadstairs', 'England', '/.stonehenge.jpg', FALSE, 200, 3, 'Day 1 Church of St Peter-in-Thanet, Dover Castle Day 2 St Peters Village Tour, The The White Cliffs of Dover Day 3 New Kent Art Gallery & Studio, Joss Bay', (SELECT CURRENT_TIMESTAMP)),
  (1, 'Lakes to Wales', 'Wales', '/pembrokeshire.jpg', TRUE, 700, 2, 'Day One- Lake District National Park Day Two- Portmeirion, Penrhyndeudraeth Day Three- Tenby', (SELECT CURRENT_TIMESTAMP)),
(1, 'Cornwall trip', 'England', '/cornwall.jpg', TRUE, 1000, 5, 'Day One- Kynance Cove, Helston Day Two-Three-Isles of Scilly, Take the Scillonian Ferry Day Four- St Ives Day Five- Woolacombe', (SELECT CURRENT_TIMESTAMP));

COMMIT;
