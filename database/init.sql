BEGIN;
DROP TABLE IF EXISTS user_table,
sessions_table,
itineraries_table CASCADE;
CREATE TABLE user_table (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
CREATE TABLE sessions_table (sid TEXT PRIMARY KEY, data JSON NOT NULL);
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
INSERT INTO user_table (email, password, username)
VALUES (
    'test@gmail.com',
    '$2a$10$vzgLAxSa1k293giKSbVWi.GgSGmb1JB/kD1qWIg.mrUlt7UwVDCWG',
    'Test Testington'
  );
INSERT INTO sessions_table (sid, data)
VALUES ('abc123', '{"test":"stuff"}');
INSERT INTO itineraries_table (
    user_id,
    name,
    img,
    country,
    need_car,
    budget,
    duration,
    description,
    created_at
  )
VALUES (
    1,
    '3 Day Trip to Cambridge',
    '/cambridge.jpg',
    'England',
    FALSE,
    300,
    3,
    '{ "Day One": { "description": "The Backs, Kings College Chapel", "location": { "coordinates": [ 52.204797, 0.116566 ], "location": "The Backs, Kings College Chapel" } }, "Day Two": { "description": "Fitzwilliam Museum, Queens College Hall", "location": { "coordinates": [ 52.200056, 0.119875 ], "location": "Fitzwilliam Museum, Queens College Hall" } }, "Day Three": { "description": "Cambridge University Botanic Garden, Bletchley Park", "location": { "coordinates": [ 52.193637, 0.127348 ], "location": "Cambridge University Botanic Garden, Bletchley Park" } } }',
    (
      SELECT CURRENT_TIMESTAMP
    )
  ),
  (
    1,
    '3 Day Trip to Broadstairs',
    '/broadstairs.jpg',
    'England',
    FALSE,
    200,
    3,
    '{ "Day One": { "description": "Church of St Peter-in-Thanet, Dover Castle", "location": { "coordinates": [51.365214,1.418923], "location": "Church of St Peter-in-Thanet, Dover Castle" } }, "Day Two": { "description": "St Peters Village Tour, The The White Cliffs of Dover", "location": { "coordinates": [40.177948,-75.730934], "location": "St Peters Village Tour, The The White Cliffs of Dover" } }, "Day Three": { "description": "New Kent Art Gallery & Studio, Joss Bay", "location": { "coordinates": [51.359704,1.443113], "location": "New Kent Art Gallery & Studio, Joss Bay" } } }',
    (
      SELECT CURRENT_TIMESTAMP
    )
  ),
  (
    1,
    'Lakes to Wales',
    '/pembrokeshire.jpg',
    'Wales',
    TRUE,
    700,
    2,
    '{ "Day One": { "description": "Lake District National Park", "location": { "coordinates": [ 54.46087,-3.088625 ], "location": "Lake District National Park" } }, "Day Two": { "description": "Portmeirion, Penrhyndeudraeth", "location": { "coordinates": [ 52.914499, -4.097332 ], "location": "Portmeirion, Penrhyndeudraeth" } }, "Day Three": { "description": "Tenby", "location": { "coordinates": [ 51.672738, -4.703579 ], "location": "Tenby" } } }',
    (
      SELECT CURRENT_TIMESTAMP
    )
  ),
  (
    1,
    'Cornwall trip',
    '/cornwall.jpg',
    'England',
    TRUE,
    1000,
    5,
    '{ "Day One": { "description": "Kynance Cove, Helston", "location": { "coordinates": [ 49.97466, -5.231462 ], "location": "Kynance Cove, Helston" } }, "Day Two": { "description": "Three-Isles of Scilly, Take the Scillonian Ferry", "location": { "coordinates": [ 49.923252, -6.296572 ], "location": "Three-Isles of Scilly, Take the Scillonian Ferry" } }, "Day Three": { "description": "St Ives Day Five", "location": { "coordinates": [ 50.208386, -5.490886 ], "location": "St Ives Day Five" }, "Day Four": { "description": "Woolacombe", "location": { "coordinates": [ 51.17255, -4.206596 ], "location": "Woolacombe" } } } }',
    (
      SELECT CURRENT_TIMESTAMP
    )
  ),
  (
    1,
    'Southwest England',
    '/cotswolds.jpg',
    'England',
    TRUE,
    1400,
    10,
    '{"Day One": {"description": "Oxford, Stratford Upon Avon"}, "Day Two": {"description": "Cotswolds Day Three: Bath, Wells, Glastonbury"}, "Day Four": {"description": "Exmoor National Park, Croyde Bay, (Barnstaple) Bude"}, "Day Five": {"description":"Cornwall- Tintagel, Saint Michaels Mount, Lands End, Minack Theatre, Mousehole"}, "Day Six": {"description":"Lizard Point, Pendennis Castle, Dartmoor National Park, Exeter"}, "Day Seven": {"description":"Beer, Seaton Down, Lyme Regis, Durdle Door, Lulworth Cove"}, "Day Eight":{"description":"Portsmouth, Arundel, Brighton"}, "Day Nine": {"description": "Brighton, Beachy Head, Rye"}, "Day Ten": {"description":"Rye, White Cliffs of Dover, Canterbury"}}',
    (
      SELECT CURRENT_TIMESTAMP
    )
  ),
  (
    1,
    'Loch Ness',
    '/scotland.jpg',
    'Scotland',
    TRUE,
    1200,
    5,
    '{ "Day One": { "description": "Edinburgh", "location": { "coordinates": [ 55.953252, -3.188267 ], "location": "Edinburgh" } }, "Day Two": { "description": "Cairngorms National Park", "location": { "coordinates": [ 57.060674, -3.606614 ], "location": "Cairngorms National Park" } }, "Day Three": { "description": "Loch Ness", "location": { "coordinates": [ 57.322858, -4.424382 ], "location": "Loch Ness" } }, "Day Four": { "description": "Inverness", "location": { "coordinates": [ 57.477773, -4.224721 ], "location": "Inverness" } }, "Day Five": { "description": "Ullapool", "location": { "coordinates": [ 57.895418, -5.161313 ], "location": "Ullapool" } } }',
    (
      SELECT CURRENT_TIMESTAMP
    )
  );
COMMIT;