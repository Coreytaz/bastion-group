# Bastion Group

Витрина опор трубопроводов на React + TypeScript, Redux Toolkit, Vite и pnpm.

## Требования

- Node.js **22.13+**.
- pnpm **12.14.0** (через Corepack или официальную установку pnpm).

## Запуск

```bash
corepack enable
pnpm install
pnpm dev
```

Сайт доступен по адресу `http://localhost:5173`.

## Команды

```bash
pnpm typecheck          # строгая проверка TypeScript
pnpm lint               # ESLint
pnpm test               # модульные тесты Vitest
pnpm build              # production в dist/
pnpm preview            # проверка production build
pnpm format             # форматирование Prettier
pnpm deploy             # GitHub Pages
```

## Развёртывание

Для GitHub Pages production base — `/bastion-group/`. В Vite предусмотрена копия `404.html` для прямого открытия внутренних маршрутов на GitHub Pages. Для другого хостинга скорректируйте `base` в `vite.config.ts` и настройте SPA fallback.

## Важно об оформлении заказа

В исходном проекте отсутствует backend для обработки заказов. Форма сохраняет последний заказ только в состоянии Redux текущего сеанса и **не отправляет** его на сервер. Спецификация скачивается как текстовый файл; для реальных продаж требуется подключение API и подтверждение заказа от сервера.

## Состояние миграции

Исходный проект уже использовал TypeScript (`.ts`/`.tsx`), но конфигурация содержала `allowJs: true`, TypeScript 4.7 и CRA. Исходники и конфигурация переведены на строгий режим и Vite; старый npm lockfile удалён. Основной менеджер указан в `packageManager`: `pnpm@12.14.0`.

**Ограничение выполнения в среде подготовки:** npm registry был недоступен (ошибка `EAI_AGAIN`). Поэтому невозможно было установить зависимости, выполнить полноценные `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build` и создать верифицированный `pnpm-lock.yaml`. После восстановления доступа к npm registry выполните:

```bash
corepack enable
pnpm install
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm install --frozen-lockfile
```

Зафиксируйте получившийся `pnpm-lock.yaml` в Git. Не используйте `--frozen-lockfile` до его генерации. В проекте нет поддельного lock-файла.
