const db = require("../db/dbConfig");

const fetchAllApts = async () => {
  try {
    const allApts = await db.any("SELECT * FROM appointments");
    return { success: true, payload: allApts };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const fetchApt = async (id) => {
  try {
    const oneApt = await db.one(
      "SELECT * FROM appointments WHERE id=$1",
      id
    );
    return { success: true, payload: oneApt };
  } catch (error) {
    return { success: false, payload: error };
  }
};

const newApt = async (apt) => {
  const { doctor,patient, reason_for_visit, notes, date} =
    apt;
  try {
    const createdApt = await db.one(
      `INSERT INTO appointments (doctor,patient, reason_for_visit, notes, date) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      [doctor,patient, reason_for_visit, notes, date]
    );
    return { success: true, payload: createdApt };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const updateApt = async (id, apt) => {
  const { doctor,patient, reason_for_visit, notes, date} =
    apt;
  try {
    const updatedApt = await db.one(
      `UPDATE appointments SET doctor=$1,patient=$2, reason_for_visit=$3, notes=$4, date=$5 WHERE id=$6 RETURNING *`,
      [doctor,patient, reason_for_visit, notes, date, id]
    );
    return { success: true, payload: updatedApt };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const deleteApt = async (id) => {
  try {
    const deletedApt = await db.one(`DELETE FROM appointments WHERE id=$1 RETURNING *`, id)
    return { success: true, payload: deletedApt}
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
}

module.exports = { fetchAllApts, fetchApt, newApt, updateApt, deleteApt };