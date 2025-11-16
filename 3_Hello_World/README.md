# Zadanie 1: Rozumienie Komunikatów w Konsoli

**Cel:** To zadanie ma na celu przećwiczenie używania podstawowych metod konsolowych do wyświetlania różnych typów komunikatów.

## Opis

W folderze `App` w pliku `index.tsx`, przećwicz używanie różnych metod konsolowych, aby zrozumieć, jak pojawiają się one w konsoli:

1. Użyj `console.log()` do wyświetlenia prostego komunikatu, na przykład:
```javascript
console.log("Cześć! To jest zwykły komunikat log.");
```

2. Użyj `console.warn()` do wyświetlenia komunikatu ostrzegawczego (pojawi się na żółto), na przykład:
```javascript
console.warn("Ostrzeżenie: To jest testowy komunikat ostrzegawczy!");
```

3. Użyj `console.error()` do wyświetlenia komunikatu o błędzie (pojawi się na czerwono), na przykład:
```javascript
console.error("Błąd: To jest testowy komunikat o błędzie!");
```

4. Dodaj wiele komunikatów konsolowych z różnymi informacjami, aby zobaczyć, jak układają się one w konsoli.

## Cel Praktyczny

Uruchom aplikację i otwórz konsolę (terminal, w którym działa Expo). Obserwuj różne kolory i formaty każdego typu komunikatu. Zrozum, która metoda konsolowa jest odpowiednia dla różnych sytuacji (informacje, ostrzeżenia, błędy).

---

# Zadanie 2: Eksploracja Menu Deweloperskiego

**Cel:** To zadanie koncentruje się na zapoznaniu się z Menu Deweloperskim React Native i jego podstawowymi opcjami.

## Opis

Naucz się, jak uzyskać dostęp do Menu Deweloperskiego w aplikacji React Native i jak się po nim poruszać.

## Kroki

1. **Otwórz Menu Deweloperskie:**
    - Jeśli używasz Expo Go na urządzeniu fizycznym: Potrząśnij urządzeniem
    - Jeśli używasz symulatora iOS: Naciśnij `Cmd + D` (Mac) lub `Ctrl + D` (Windows/Linux)
    - Jeśli używasz emulatora Android: Naciśnij `Cmd + M` (Mac) lub `Ctrl + M` (Windows/Linux)
    - W terminalu Expo CLI: Naciśnij `m`

2. **Przejrzyj następujące opcje:**
    - **Reload**: Ręcznie przeładuj aplikację
    - **Toggle Performance Monitor**: Włącz, aby zobaczyć FPS (klatki na sekundę) i użycie pamięci na ekranie
    - **Toggle Element Inspector**: Włącz, aby inspekcjonować elementy UI (będziemy to częściej używać później)
    - **Debug Remote JS**: Otwiera narzędzia debugowania w przeglądarce

3. **Przećwicz przeładowywanie:**
    - Zmień jakiś tekst w swoim pliku `index.tsx`
    - Zapisz plik i obserwuj, jak Fast Refresh automatycznie aktualizuje aplikację
    - Spróbuj ręcznie przeładować, używając Menu Deweloperskiego

4. **Włącz Monitor Wydajności:**
    - Włącz Performance Monitor
    - Obserwuj RAM i FPS wyświetlane na ekranie
    - Pozostaw włączone podczas interakcji z aplikacją

## Cel Praktyczny

Poczuj się swobodnie z dostępem do Menu Deweloperskiego i zrozum, jakie informacje dostarcza Monitor Wydajności. To będzie Twoje główne narzędzie do developmentu i debugowania.

---

# Zadanie 3: Tworzenie Pierwszego Zamierzonego Błędu

**Cel:** Naucz się czytać i rozumieć komunikaty o błędach, gdy coś pójdzie nie tak w Twoim kodzie.

## Opis

Celowo utwórz prosty błąd, aby zobaczyć, jak React Native wyświetla informacje o błędach i nauczyć się, jak je naprawiać.

## Kroki

1. W pliku `index.tsx` znajdź miejsce, gdzie znajduje się `<Text>` z jakąś zawartością wewnątrz.

2. **Utwórz błąd składniowy**.

3. Zapisz plik i obserwuj:
    - Aplikacja pokaże **czerwony ekran błędu** (Redbox)
    - Przeczytaj uważnie komunikat o błędzie - powie Ci, co jest nie tak i gdzie
    - Zanotuj nazwę pliku i numer linii, w której wystąpił błąd

4. **Napraw błąd**.

## Cel Praktyczny

Naucz się czytać komunikaty o błędach bez strachu. Zrozum, że:
- Czerwone ekrany (Redbox) wskazują krytyczne błędy, które zatrzymują aplikację
- Komunikaty o błędach mówią dokładnie, co jest nie tak i gdzie szukać
- Większość błędów to proste literówki lub brakujący kod, które są łatwe do naprawienia, gdy zrozumiesz komunikat
- Fast Refresh automatycznie zaktualizuje Twoją aplikację, gdy naprawisz błąd

Powodzenia w debugowaniu!
