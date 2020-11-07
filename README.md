# Zadanie rekrutacyjne
Zadanie rekrutacyjne polega na napisaniu programu, który ma przedstawiać proces
 zakupowy książek (pobieranie danych o książkach z API, dodawanie i usuwanie
 produktów z koszyka, wypełnienie formularza danymi osobowymi potrzebnymi do
 realizacji zamówienia).

Rozwiązanie zadania należy umieścić w folderze _front_.
### Aplikacja powinna składać się z 3 podstron:
#### 1. Strona główna
###### Lista funkcjonalności składająca się z:
* pobieranie danych z API po wejściu na stronę aplikacji (**GET** _/book_),
* wyświetlenie wcześniej pobranych danych w konkretnym formacie, tj. każdą
 książkę powinien przedstawiać jeden blok, który ma w sobie zawierać okładkę
 książki, jej tytuł, autora, liczbę stron oraz przycisk:
    * `DODAJ DO KOSZYKA`, który będzie dodawał konkretną pozycję do koszyka.
* przycisk, który umożliwia przejście do koszyka.
#### 2. Strona prezentująca koszyk
###### Lista funkcjonalności składająca się z:
* wyświetlanie listy wybranych przez użytkownika książek,
* przycisk `DALEJ`, który będzie kierował do etapu podsumowania zamówienia.
##### 3. Strona zawierająca formularz potrzebny do złożenia zamówienia
###### Lista funkcjonalności składająca z:
* przygotowanie formularza z polami:
    * imię,
    * nazwisko,
    * miejscowość,
    * kod pocztowy.
* przycisk `ZAMAWIAM I PŁACĘ` po naciśnięciu którego zostaną wysłane dane pod
 endpoint **POST** _/order_.
###### Funkcjonalności dodatkowe:
* walidacja formularza.
### Spis **wymaganych** technologii przy pracy z zadaniem
* react,
* dowolna biblioteka do zarządania stanem np. redux.

## Dokumentacja API
Dokumentacja w formacie OpenAPI 3 dostępna jest po uruchomieniu mock serwera
 i przejściu na adres: [localhost:3001/docs](http://localhost:3001/docs).

## Uruchamianie środowiska deweloperskiego
Wymagane jest posiadanie Node.js (zaleca się dodatkowo Yarn). Projekt wymaga
 instalacji i uruchomienia API mock serwera:
```bash
cd api
yarn
yarn start
```
