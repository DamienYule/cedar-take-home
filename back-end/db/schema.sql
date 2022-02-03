DROP TABLE IF EXISTS appointments;

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY, 
    doctor TEXT,
    patient TEXT,
    reason_for_visit TEXT,
    notes TEXT,
    date TEXT
);