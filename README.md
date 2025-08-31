# SpineTime Rekrutacja

**Instrukcja uruchomienia**
1. Sklonuj repo
   ```git clone https://github.com/maciejwiacek/spinetime```
2. Przejdź do folderu projektu
   ```cd spinetime```
3. Zainstaluj dependencies
   ```npm install```
4. Uruchom aplikację
   ```npx expo start```
W terminalu będą instrukcje, jak dalej odpalić aplikację na emulatorze (a - Android, i - iOS) albo przez Expo Go (skan QR na telefonie).

**Opis projektu** <br />
Aplikację zrobiłem w Expo - szybkie budowanie i development<br />
Do routingu użyłem Expo Router, który jest nowocześniejszy, prostszy i wygodniejszy, niż klasyczny React Navigation<br />
Wybory usera postanowiłem trzymać w stanie globalnym i użyłem do tego Zustand<br />
Dane z pliku JSON udostępniane są przez Context, co zapewnia prosty dostęp do nich w całej aplikacji
