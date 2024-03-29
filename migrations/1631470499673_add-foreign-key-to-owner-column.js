/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // Membuat user baru
  pgm.sql("INSERT INTO users(id, username, password, fullname) VALUES ('old_notes', 'old_notes', 'old_notes', 'old_notes')");

  // Mengubah nilai owner pada note yang owner-nya berisi NULL
  pgm.sql("UPDATE notes SET owner = 'old_notes' WHERE owner = NULL");

  // memberikan constraint foreign key pada owner terhadap kolom id dari tabel users
  pgm.addConstraint('notes', 'fk_notes.owner_user.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  // Menghapus constraint fk_user.owner.user.id pada tabel notes
  pgm.dropConstraint('notes', 'fk_notes.owner_user.id');

  // Mengubah nilai owner menjadi NULL
  pgm.sql("UPDATE notes SET owner = NULL WHERE owner = 'old_notes'");

  // Menghapus user baru
  pgm.sql("DELETE FROM users WHERE id = 'old_notes'");
};
