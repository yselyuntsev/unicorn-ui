# Avatars

Компонент `u-avatar`, как правило, используются для отображения круговых изображений профиля пользователя.
Этот компонент позволяет динамически изменять размер и добавлять радиус границы адаптивных изображений, значков и текста.

## API
[u-avatar](/api/u-avatar)

## Входные параметры (Props)

### Size

Параметр `size` позволяет задавать высоту и ширину `u-avatar`. Компонент масштабируется с соотношением сторон 1:1.

<docs-demo>

<u-avatar size="32">32</u-avatar>
<u-avatar size="48">48</u-avatar>
<u-avatar size="64">64</u-avatar>

</docs-demo>

```vue
<u-avatar size="32">32</u-avatar>
<u-avatar size="48">48</u-avatar>
<u-avatar size="64">64</u-avatar>
```

## Слоты (Slots)

### Default

Слот компонента `u-avatar` по умолчанию будет принимать `u-icon` компонент, изображение или текст. Комбинируйте их с другими компонентами, чтобы создать действительно что-то уникальное.

<docs-demo>

<u-avatar><u-icon icon="mdi-account" /></u-avatar>
<u-avatar><img src="https://randomuser.me/api/portraits/men/59.jpg" /></u-avatar>
<u-avatar>ЕС</u-avatar>

</docs-demo>

```vue
<u-avatar><u-icon icon="mdi-account" /></u-avatar>
<u-avatar><img src="https://randomuser.me/api/portraits/men/59.jpg" /></u-avatar>
<u-avatar>ЕС</u-avatar>
```