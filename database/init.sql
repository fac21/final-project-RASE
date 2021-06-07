
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
    description JSON NOT NULL,
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
  (1, 'Lakes to Wales', '/pembrokeshire.jpg', 'Wales', TRUE, 700, 2, '{"Day One": {"description": "Lake District National Park"}, "Day Two": { "description": "Portmeirion, Penrhyndeudraeth"}, "Day Three": {"description": "Tenby"}}', (SELECT CURRENT_TIMESTAMP)),
  (1, 'Cornwall trip', '/cornwall.jpg', 'England', TRUE, 1000, 5, '{"Day One": {"description": "Kynance Cove, Helston"}, "Day Two": {"description": "Three-Isles of Scilly, Take the Scillonian Ferry"}, "Day Three": {"description": "St Ives Day Five- Woolacombe"}}', (SELECT CURRENT_TIMESTAMP)),
  (1, 'Southwest England', '/cotswolds.jpg', 'England', TRUE, 1400, 10, '{"Day One": {"description": "Oxford, Stratford Upon Avon", "Day Two": {"description": "Cotswolds Day Three: Bath, Wells, Glastonbury"}, Day Four: Exmoor National Park, Croyde Bay, (Barnstaple), Bude Day Five: Cornwall- Tintagel, Saint Michaels Mount, Lands End, Minack Theatre, Mousehole Day Six: Lizard Point, Pendennis Castle, Dartmoor National Park, Exeter Day Seven: Beer, Seaton Down, Lyme Regis, Durdle Door, Lulworth Cove Day Eight: Portsmouth, Arundel, Brighton Day Nine: Brighton, Beachy Head, Rye Day Ten: Rye, White Cliffs of Dover, Canterbury', (SELECT CURRENT_TIMESTAMP)),
  (1, '3 Day Trip to Cambridge', '/cambridge.jpg', 'England', FALSE, 300, 3, '{   "Day One":{     "description":"The Backs, Kings College Chapel"   },   "Day Two":{"description":"Fitzwilliam Museum, Queens College Hall"},   "Day Three":{"description":"Cambridge University Botanic Garden, Bletchley Park"} }', (SELECT CURRENT_TIMESTAMP)),
  (1, '3 Day Trip to Broadstairs', '/broadstairs.jpg', 'England', FALSE, 200, 3, '{   "Day One":{     "description":"Church of St Peter-in-Thanet, Dover Castle"   },   "Day Two":{     "description":"St Peters Village Tour, The The White Cliffs of Dover"   },   "Day Three":{     "description":"New Kent Art Gallery & Studio, Joss Bay"   } }', (SELECT CURRENT_TIMESTAMP));

COMMIT;

{
  'Day one':{
    'description':''
  },
  'Day one':{
    'description':''
  },
  'Day one':{
    'description':''
  },
  'Day one':{
    'description':''
  },
}



'Day One  Day Two  Day Three '

'{
  "Day One":{
    "description":"The Backs, Kings College Chapel"
  },
  "Day Two":{
    "description":"Fitzwilliam Museum, Queens College Hall"
  },
  "Day Three":{
    "description":"Cambridge University Botanic Garden, Bletchley Park"
  }
}'
