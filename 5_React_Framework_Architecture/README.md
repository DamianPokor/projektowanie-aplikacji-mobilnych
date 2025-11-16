# Zadanie 1: Wyświetlanie Aktualnej Daty i Godziny

**Cel:** Przećwiczenie używania wbudowanego obiektu JavaScript Date i formatowania danych daty do wyświetlenia w komponencie Text.

## Zadanie:
- Utwórz komponent funkcyjny o nazwie `DateDisplay`, który nie przyjmuje żadnych propsów.
- Wewnątrz tego komponentu użyj obiektu JavaScript `new Date()`, aby pobrać aktualną datę.
- Sformatuj datę, aby wyświetlić dzień, miesiąc i rok (np. DD/MM/RRRR lub Miesiąc Dzień, Rok).
- Wyrenderuj sformatowaną datę wewnątrz komponentu `Text`.

---

# Zadanie 2: Komponent Image z Source i Wymiarami

**Cel:** Przećwiczenie używania komponentu Image, ustawiania źródła (z sieci lub lokalnych zasobów) i definiowania jawnych wymiarów.

## Zadanie:
- Utwórz komponent o nazwie `MapImage`.
- Użyj komponentu `Image`, aby wyświetlić obraz mapy Polski (użyj dowolnego publicznie dostępnego URL dla uri obrazu).
- Zdefiniuj jawne style szerokości i wysokości (np. 300 szerokości na 200 wysokości), aby zapewnić poprawne wyświetlenie obrazu.

---

# Zadanie 3: Stylowanie Tekstu z Zagnieżdżaniem

**Cel:** Przećwiczenie stylowania elementów tekstowych za pomocą zagnieżdżonych komponentów Text, aby osiągnąć efekty pogrubienia, kursywy i koloru, ponieważ React Native nie obsługuje standardowych tagów HTML takich jak `<b>` lub `<i>`.

## Zadanie:
Wyświetl następujący tekst używając odpowiedniego stylowania:

*"Pizza to bardzo smaczne włoskie danie. Wykonuje się ją z ciasta drożdżowego. Na ciasto wylewa się sos pomidorowy. Na wierzch kładzie się składniki: kiełbasę, ser żółty, oliwki, paprykę. Istnieje wiele rodzajów pizzy, może być mięsna, bezmięsna, rybna lub słodka z ananasem."*

Upewnij się, że:
- Lista składników (kiełbasa, ser żółty, oliwki, papryka) jest pogrubiona.
- Słowo *pizza* (oba wystąpienia) jest pisane kursywą (lub pogrubioną kursywą, jeśli pozwala na to stylowanie).
- Słowo *ananasem* jest wyświetlane w kolorze żółtym.

---

# Zadanie 4: Odtworzenie Układu Flexbox

**Cel:** Opanowanie podstawowych właściwości Flexbox (flexDirection, justifyContent, alignItems) i użycia StyleSheet do odtworzenia złożonego układu.

## Zadanie:
Używając obiektu `StyleSheet` i komponentu `View`, odtwórz następujący układ bloków:
- Główny kontener, który wypełnia ekran.
- Jeden niebieski prostokąt u góry (np. `flex: 1`).
- Jeden czerwony prostokąt pośrodku (np. `flex: 2`).
- Wiersz na dole (np. `flex: 1`) zawierający dwa równe żółte prostokąty obok siebie.

---

# Zadanie 5: Struktura Komponentów Funkcyjnych i Klasowych

**Cel:** Przećwiczenie tworzenia i integracji zarówno komponentów funkcyjnych, jak i klasowych przy użyciu nowoczesnych konwencji nazewnictwa i interfejsów TypeScript.

## Zadanie
1. Utwórz komponent funkcyjny o nazwie `UserName` (używając interfejsu), który wyświetla Twoje imię.

2. Utwórz komponent klasowy o nazwie `UserSurname` (używając `Component` z React), który wyświetla Twoje nazwisko lub pseudonim.

3. Zaimportuj oba komponenty do głównego pliku `index.tsx` i wyrenderuj je.

4. Uruchom aplikację używając Expo/Emulatora Android/Podglądu Web, aby zweryfikować wynik.


# Zadanie 6: Zagnieżdżone Komponenty i Izolacja Stylów

**Cel:** Przećwiczenie kompozycji komponentów i stosowania izolowanych stylów przy użyciu obiektu StyleSheet.create i układu flex.

## Zadanie:
- Utwórz komponent o nazwie `ColorBlock` (wielokrotnego użytku), który przyjmuje prop `color: string` i prop `size: number`.
- W głównym komponencie funkcyjnym `LayoutWithBlocks` wyrenderuj trzy instancje `ColorBlock` z różnymi kolorami (np. Czerwony, Zielony, Niebieski).
- Upewnij się, że każda instancja `ColorBlock` ma zewnętrzny margines 10px i stały rozmiar (np. 80x80).
- Użyj kontenera `View` z `flexDirection: 'row'` w `LayoutWithBlocks`, aby wyświetlić je poziomo.

---

# Zadanie 7: Transfer Danych za Pomocą Propsów i Destrukturyzacji

**Cel:** Przećwiczenie transferu złożonych struktur danych za pomocą propsów komponentów i wykorzystania destrukturyzacji obiektów dla czystego kodu.

## Zadanie:
- W `index.tsx` utwórz interfejs TypeScript i obiekt o nazwie `inviteData` zawierający szczegóły urodzinowego przyjęcia:
    - `date: string`
    - `time: string`
    - `location: string`
    - `dressCode: string`
- Utwórz komponent funkcyjny o nazwie `InvitationCard`, który otrzymuje te pola danych przez propsy.
- Użyj destrukturyzacji na liście parametrów komponentu `InvitationCard` (`({ date, time, location, dressCode }) => ...`), aby uzyskać dostęp do propsów.
- Wyświetl treść zaproszenia i wszystkie pola danych wyraźnie w `InvitationCard`.

---

# Zadanie 8: Wyświetlanie Początkowych Danych Stanu (Przed Hookiem)

**Cel:** Ustanowienie podstawy do wyświetlania dynamicznych danych poprzez przekazywanie migawki danych czasowych przez propsy.

## Zadanie:
- W `index.tsx` utwórz zmienną `initialDateTime` i przypisz jej aktualną datę i godzinę sformatowaną jako string, używając obiektu `Date()` i metody takiej jak `toLocaleTimeString()` lub `toLocaleString()`.
- Utwórz komponent funkcyjny `DataTimer`, który przyjmuje prop `currentTime: string`.
- Przekaż zmienną `initialDateTime` do komponentu `DataTimer` i wyświetl string czasu/daty.

---

# Zadanie 9: Zegar Cyfrowy Czasu Rzeczywistego (Hooki: useState & useEffect)

**Cel:** Wprowadzenie zarządzania stanem (useState) i efektów ubocznych (useEffect) z czyszczeniem (setInterval) w celu utworzenia dynamicznie aktualizującego się UI.

## Zadanie:
- Zmodyfikuj poprzednie zadanie, używając `index.tsx` jako głównego komponentu.
- Dodaj hook `useState`, aby przechowywać aktualny string czasu. Zainicjalizuj stan z aktualnym czasem.
- Użyj hooka `useEffect`, aby uruchomić efekt uboczny raz po zamontowaniu komponentu (tablica zależności `[]`).
- Wewnątrz `useEffect` użyj `setInterval` (np. co 1000ms), aby aktualizować stan nowym stringiem czasu.
- Upewnij się, że zwracasz funkcję czyszczącą z `useEffect`, aby wyczyścić interwał, gdy komponent zostanie odmontowany.
- Przekaż wartość stanu (zamiast zmiennej statycznej) do komponentu `DataTimer`.

**Rezultat:** Stworzyłeś funkcjonalny zegar cyfrowy! 🕒

---

# Zadanie 10: Aktualizacja Stanu poprzez Interakcję Użytkownika

**Cel:** Przećwiczenie używania handlera onPress na przycisku do aktualizacji stanu komponentu nadrzędnego z dynamiczną wartością.

## Zadanie:
- W `index.tsx` zainicjalizuj zmienną stanu `randomNumber` (np. zainicjalizowaną na 0).
- Utwórz komponent funkcyjny o nazwie `RandomNumberGenerator`.
- Wewnątrz `RandomNumberGenerator` dołącz komponent `Button`. Celem przycisku jest wygenerowanie nowej losowej liczby.
- Przekaż funkcję callback (setter z `useState`) z `index.tsx` jako prop do `RandomNumberGenerator`.
- W handlerze `onPress` przycisku wywołaj przekazaną funkcję callback, aby zaktualizować stan rodzica losową liczbą całkowitą między 1 a 10.
    - **Wskazówka do generowania:** `Math.floor(Math.random() * (10 - 1 + 1) + 1)`
- Wyświetl aktualną wartość `randomNumber` ze stanu `index.tsx`.
