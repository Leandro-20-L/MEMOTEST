# 🧠 MEMOTEST - Juego de Memoria Multidificultad

Aplicación desarrollada con **Angular**, **Ionic** y **Capacitor** que implementa un clásico **juego de memoria (memotest)** con diferentes niveles de dificultad y un sistema de autenticación y ranking utilizando **Supabase**.

---

## 🚀 Tecnologías utilizadas

- ✅ **Angular** - Framework principal
- ✅ **Ionic** - Framework para aplicaciones móviles y web
- ✅ **Capacitor** - Para acceder a funcionalidades nativas (Android, iOS)
- ✅ **Supabase** - Backend como servicio: login, almacenamiento y base de datos

---

## 🔐 Sistema de login

La app cuenta con un sistema de autenticación de usuarios a través de **Supabase Auth**, que permite:

- Registro y login de usuarios
- Persistencia de sesión
- Asociación de partidas al usuario autenticado

---

## 🎮 Modos de dificultad

El usuario puede elegir entre 3 niveles de dificultad:

| Dificultad | Cartas Totales | Descripción                     |
|------------|----------------|----------------------------------|
| Fácil      | 8              | Ideal para jugadores nuevos     |
| Medio      | 12             | Nivel intermedio de desafío     |
| Difícil    | 16             | Reto para expertos en memoria   |

🔁 El objetivo es encontrar todos los pares de cartas en el menor tiempo posible y con la menor cantidad de movimientos.

---

## 🏆 Sistema de ranking

Cada dificultad tiene su propio **ranking**, donde se almacenan:

- Nombre del jugador
- Tiempo empleado
- Cantidad de movimientos
- Fecha de la partida

Los rankings se ordenan por **mejor desempeño** (menos movimientos y menor tiempo).

---

## 📲 Compatibilidad

- ✅ Web
- ✅ Android (mediante build con Capacitor)
- ❌ iOS (en desarrollo o pendiente)

---

## 📸 Capturas (opcional)

> Podés agregar imágenes aquí si querés mostrar pantallas de la app.

---

## 📦 Instalación (modo desarrollo)

```bash
git clone https://github.com/Leandro-20-L/MEMOTEST.git
cd MEMOTEST
npm install
ionic serve
