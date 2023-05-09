# Opis
React to popularna biblioteka JavaScript służąca do tworzenia interaktywnych interfejsów użytkownika. React pozwala na deklaratywne definiowanie komponentów, które reprezentują części interfejsu użytkownika oraz na ich dynamiczną aktualizację w czasie rzeczywistym.

Vite natomiast to narzędzie służące do szybkiego budowania i uruchamiania aplikacji internetowych. Jest to narzędzie typu "bundler", które optymalizuje i minimalizuje wielkość plików, co pozwala na szybsze ładowanie strony i lepszą wydajność aplikacji. Vite wykorzystuje system "Hot Module Replacement" (HMR), który pozwala na automatyczne odświeżanie strony podczas wprowadzania zmian w kodzie.

Dzięki zastosowaniu Vite w połączeniu z React, możemy stworzyć wydajną i responsywną aplikację internetową, która szybko reaguje na zmiany wprowadzane przez użytkownika. Vite pozwala również na łatwe zarządzanie zależnościami i bibliotekami, co ułatwia pracę programistom i pozwala na szybsze tworzenie aplikacji.

React Developer Tools to wtyczka do przeglądarki internetowej, która ułatwia debugowanie i analizowanie komponentów React. Dzięki tej wtyczce możemy łatwo prześledzić hierarchię komponentów oraz zobaczyć, jakie właściwości i stany są przekazywane między nimi.

React Developer Tools pozwala na modyfikowanie stanu komponentów i ich właściwości w czasie rzeczywistym, co ułatwia testowanie i debugowanie aplikacji. Wtyczka ta jest dostępna dla wielu przeglądarek internetowych, takich jak Google Chrome, Mozilla Firefox czy Microsoft Edge.

Korzystanie z React Developer Tools jest szczególnie przydatne dla programistów, którzy pracują z bardziej złożonymi aplikacjami React, ponieważ pozwala ona na szybsze i skuteczniejsze debugowanie i testowanie aplikacji.

# Wymagania
Przed uruchomieniem aplikacji należy upewnić się, że na komputerze zainstalowane są Node.js oraz npm.

# Instalacja
Aby zainstalować aplikację, należy wykonać następujące kroki:

W konsoli wpisz komendę npm create vite@latest lub npm create vite@4.1.0 i stwórz nowy projekt Vite.
npx create-react-app my-app
Przejdź do katalogu z projektem: cd react-app
Zainstaluj wymagane biblioteki: npm install
Uruchom aplikację: npm run dev
Struktura projektu
W projekcie znajdują się następujące foldery i pliki:

node_modules - zawiera zależności, które są wykorzystywane w projekcie.
public - zawiera pliki statyczne, takie jak obrazy, które można wykorzystać w aplikacji.
src - zawiera kod źródłowy aplikacji.
app.tsx - plik, który odpowiada za renderowanie aplikacji.
index.tsx - plik, który importuje aplikację i renderuje ją w elemencie DOM.
package.json - plik konfiguracyjny, który zawiera informacje o projekcie, zależności i skrypty.
devDependencies - sekcja w pliku package.json, która zawiera zależności deweloperskie, takie jak prettier, vite i inne.
tsconfig.json - plik konfiguracyjny dla TypeScript.
vite.config.ts - plik konfiguracyjny dla Vite.
W folderze src znajduje się również folder components, który powinien zawierać funkcjonalne komponenty, które są bardziej popularne niż klasowe. Nazwy komponentów powinny być zapisane w notacji PascalCasing.

# Dodatkowe informacje
W projekcie wykorzystano bibliotekę Bootstrap, którą można zainstalować przy pomocy komendy npm i bootstrap@latest lub npm i bootstrap@5.2.3. W pliku `package

Ten kod importuje React i ReactDOM, a następnie renderuje komponenty App i App1 za pomocą React StrictMode i React Router. Komponent BrowserRouter umożliwia nawigację między różnymi ścieżkami w aplikacji.

Funkcja ReactDOM.createRoot umożliwia renderowanie aplikacji z użyciem "concurrent mode", co pozwala na wydajniejsze i płynniejsze renderowanie interfejsu użytkownika. Metoda render przyjmuje dwa argumenty: element, który chcemy wyrenderować, oraz element, w którym chcemy go umieścić na stronie.

Na końcu pliku znajduje się import styli CSS z biblioteki Bootstrap, który zostanie zastosowany w komponentach aplikacji.



Warto wspomnieć

node -v
prettier
settings format on save
vite przyśpiesza i zmniejsza bundle
npm create vite@latest | npm create vite@4.1.0l
cd react-app
npm install | npm i wszystkie third party potrzebne biblioteki
npm run dev
OPIS CO TO JEST REACT VITE ORAZ POSZCZEGÓLNE FOLDERY NODE MODULES SRC PUBLIC ORAZ PLIKI APP INDEX PACKAGE.JSON DEVDEPENDENCIES TSCONFIG.JSON VITE.TS
folder components powinno być funkcyjne są popularniejsze od klasowych
PascalCasing
czym sie różni ts od tsx
JSX opowiedz
APP.tsx opowiedz o kodzie
opowiedz że vite hmr hot module replacement odświerzył
nawiasy {} dajemy tam js kod oraz stwórz jaką stałą
Powiedz o Virtualnym DOmie dependencies react dom opowiedz o main.tsx
npm i bootstrap@latest | npm i bootstrap@5.2.3 opowiedz o package.json usuń css import 'bootstrap/dist/css/bootstrap.css'
format document with prettier
wrap with 
for each element shoud have key
jak działa &&
różnica let a const
typescript ostrzega nas że brakuje nam argumentu
różnica miedzy props a state że jest immutable
es7+ wtyczka
children
react developer tools sorce code
npm i react-bootstrap
powiedz o routering że book\:id ma to samo book\new

npm i @tanstack/react-query paginacja lazy loading zarządzanie stanami cachowanie danych


vite cachowanie 20 razy szybdszy ts bo nie sprawdza typowania możemy tam ustawiać ścieżke sprawdzać w jakim trybie jesteśmy development build rpodaction i zależności od tego odpowiednio modyfikować procesy możemy zarządzac plikami env możemy czyścić konsole ustawić na jakim porcie ma być startowany port npm run preoview czasami może zdarzyć sie tak że mamy wiele portów zajętych i sam znajdzie port najbliższy np 3000 to wezmie 3001
możemy ustawiać poziomy logowania Default config daje nam to że jeśli coś napiszemy odrazu wyświtla nam podgląd