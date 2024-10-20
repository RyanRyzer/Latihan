/** Source Code Nama dan Origin pada penggunaan Function */

function hello(name, origin = "Bandung") {
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

let rahmat = hello('Rahmat', 'Semarang');
let indra = hello('Indra');

console.log(rahmat);
console.log(indra);


/** Source Code Sintaksis */

// TODO: buatlah variabel (konstan) bernama `currency` dan isi dengan nilai "IDR".
const currency = "IDR";
console.log(currency);
// TODO: buatlah variabel bernama `value` dan isi dengan nilai 10000.
let value = 10000;
console.log(value);
// TODO: tambahkan nilai di dalam variabel `value` sebesar 5000.
value += 5000;
console.log(value);
/**
 * TODO: buatlah variabel (konstan) bernama `money`,
 * isi dengan penambahan string dari nilai `currency` + " " + `value`.
 */
const money = currency + " " + value;
console.log(money);

//** Struktur Data Object */
const user = {
  id: 24,
  email: 'aras@dicoding.com',
  name: 'Arsy',
  nickname: 'Aras',
  username: 'aras123',
  password: 'secret',
};

const [ id, email, name, nickname, username, password ] = user;
console.log(id, email, name, nickname, username, password);


const account = {
  balance: 1000,
  debt: 10,
};

account.balance = 2000;
console.log(account.balance);
