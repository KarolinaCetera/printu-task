## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Proponowane uwagi do API:
1. Niektóre itemy nie posiadają unikatowego ID
2. Niektóre itemy nie posiadają wartości color w prawidłowym formacie HEX
3. Projekt o id cklzjw3mn0001cq9k3mvy3fvf-7941218198815694 zwraca niepoprawne dane - należy je poprawić
4. Project o id cklzhx7e80001py9kcql231z3-4748779261984095 
   - zwraca kod błędu 500, ale error message jest nie jasna. Należy zaimplementować komunikat, który przekaże wiecej informacji o błędzie.
   - należy poprawić błąd w taki sposób, by id zwracało wartość lub usunąć pozycję z bazy danych
5. Project o id cklziyda30000m19k92zfao28-9430719080200028
   - zwraca kod błędu 404, ale error message jest nie jasna. Należy zaimplementować komunikat, który przekaże wiecej informacji o błędzie.
   - należy poprawić błąd w taki sposób, by id zwracało wartość lub usunąć pozycję z bazy danych

Proponowane testy:
1. Czy wewnątrz wyświetla się punkt oznaczający jego środek wraz z informacją o rotacji.
2. Czy jeżeli nie ma żadnych danych do wyświetlenia, wewnątrz płótna pojawia się napis Empty.
3. Czy wyświetlają się dane projektu i czy są poprawne.
4. Czy pojawia się bounding box właściwy dla zrotowanego elementu.
5. Czy istnieje placeholder dla pustego inputa informujący, że zostanie wylosowany randomowych projekt.
6. Czy kliknięcie na button powoduje wysłanie zapytania.
7. Czy jeśli wartość item.color nie jest poprawnym kolorem w formacie HEX, kolor elementu jest czarny.
8. Czy w przypadku wystąpienia błędu pojawia się odpowiedni komunikat.
9. Czy dla wartości pending=true pojawia się napis Loading.
