# DRF + React Simple Pet Project

This project is a simple CRUD application using Django Rest Framework (DRF) as the backend and React as the frontend.

## Project Structure

### Backend (DRF)

- **Django Admin**: Available at [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/).
  - To create a superuser, run:
    ```bash
    docker exec -it backend python manage.py createsuperuser
    ```
  - Set the username and password (email can be skipped).
  - Sign in to the admin panel using the created credentials.

- **API Endpoints**:
  - `GET /api/notes/`: List all notes.
  - `POST /api/notes/`: Create a new note.
  - `DELETE /api/notes/delete/<int:pk>/`: Delete a note by ID.
  - `POST /api/user/register/`: Register a new user.
  - `POST /api/token/`: Obtain a JWT token.
  - `POST /api/token/refresh/`: Refresh the JWT token.
  - `GET /api-auth/`: DRF's built-in login view.
  - The base API URL is `/api/`.

### Frontend (React)

- The React application is hosted at [http://172.21.0.3:3000/](http://172.21.0.3:3000/).
- **Routes**:
  - `/login`: Login page.
  - `/logout`: Logout page.
  - `/register`: Registration page.
  - `*`: Catch-all route for 404 Not Found.

## Running the Project

```docker compose up```

## Additional Information

- **Creating a Superuser**:
  - Run the following command in your terminal:
    ```bash
    docker exec -it backend python manage.py createsuperuser
    ```
  - Follow the prompts to set the username and password.

- **Accessing Django Admin**:
  - Visit [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/).
  - Sign in with the superuser credentials.

- **Accessing the React App**:
  - Visit [http://172.21.0.3:3000/](http://172.21.0.3:3000/).

## Notes

- Ensure the backend is running before accessing the frontend.
- The backend and frontend can be customized and extended as needed.

---

This project is a basic setup intended for learning and quick prototyping. Contributions and improvements are welcome.
