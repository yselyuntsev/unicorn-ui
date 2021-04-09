# Alerts

Компонент `u-alert` используется для передачи важной информации для пользователя с использованием цвета, текста и иконок.
По умолчанию `u-alert` может быть пяти базовых вариантов: `primary`, `success`, `danger`, `warning`, `info`.

## API
[u-alert](/api/u-alert)

## Входные параметры (Props)

### Variant

Параметр `variant` указывает на один из пяти вариантов стилизации `u-alert`: 
**primary**, **success**, **error**, **warning**, **info**.

<docs-demo vertical stretch>

<u-alert variant="primary">Primary вариант предупреждения</u-alert>
<u-alert variant="success">Success вариант предупреждения</u-alert>
<u-alert variant="error">Error вариант предупреждения</u-alert>
<u-alert variant="warning">Warning вариант предупреждения</u-alert>
<u-alert variant="info">Info вариант предупреждения</u-alert>

</docs-demo>

```vue
<u-alert variant="primary">Primary вариант предупреждения</u-alert>
<u-alert variant="success">Success вариант предупреждения</u-alert>
<u-alert variant="error">Error вариант предупреждения</u-alert>
<u-alert variant="warning">Warning вариант предупреждения</u-alert>
<u-alert variant="info">Info вариант предупреждения</u-alert>
```


### Icon

Параметр `icon` позволяет добавить иконку в начало `u-alert` компонента. По умолчанию иконка отсутствует.


### Dense

Параметр `dense` уменьшает высоту компонента для создания простого и компактного отображения.

<docs-demo vertical stretch>

<u-alert variant="primary" dense>Primary Dense вариант предупреждения</u-alert>
<u-alert variant="success" dense>Success Dense вариант предупреждения</u-alert>

</docs-demo>

```vue
<u-alert variant="primary" dense>Primary Dense вариант предупреждения</u-alert>
<u-alert variant="success" dense>Success Dense вариант предупреждения</u-alert>
```

### Prominent

Параметр `prominent` обеспечивает более выраженное отображение компонента за счет увеличения 
высоты и увеличения пустого пространства рядом с иконкой (если используется).
При одновременном применении параметров `dense` и `prominent`, предупреждение будет иметь обычный вид по умолчанию,
но с **заметным** пустым пространством вокруг значка.

<docs-demo vertical stretch>

<u-alert variant="error" icon="mdi-alert" prominent>Error Prominent вариант предупреждения</u-alert>
<u-alert variant="success" prominent text icon="mdi-check-circle" dense>Success Dense вариант предупреждения</u-alert>

</docs-demo>

```vue
<u-alert variant="error" icon="mdi-alert" prominent>Error Prominent вариант предупреждения</u-alert>
<u-alert variant="success" prominent text icon="mdi-check-circle" dense>Success Dense вариант предупреждения</u-alert>
```

### Outlined

Параметр `outlined` инвертирует стиль предупреждения, применяя основной цвет для границы и текста вместе с прозрачным фоном.

<docs-demo vertical stretch>

<u-alert variant="success" outlined>Success Outlined вариант предупреждения</u-alert>
<u-alert variant="primary" text outlined>Primary Text Outlined вариант предупреждения</u-alert>

</docs-demo>

```vue
<u-alert variant="success" outlined>Success Outlined вариант предупреждения</u-alert>
<u-alert variant="primary" text outlined>Primary Text Outlined вариант предупреждения</u-alert>
```

### Text

Параметр `text` обеспечивает более простой вариант отображения, который имеет пониженную прозрачность фона заданного варианта цвета.
Подобно другим параметрам, `text` можно комбинировать с другими параметрами, такими как `dense`, `prominent` и `outlined`.

<docs-demo vertical stretch>

<u-alert variant="warning" text icon="mdi-alert" prominent>Warning Prominent Text вариант предупреждения</u-alert>
<u-alert variant="primary" dense text icon="mdi-check-circle">Primary Dense Text вариант предупреждения</u-alert>

</docs-demo>

```vue
<u-alert variant="warning" text icon="mdi-alert" prominent>Warning Prominent Text вариант предупреждения</u-alert>
<u-alert variant="primary" dense text icon="mdi-check-circle">Primary Dense Text вариант предупреждения</u-alert>
```

### Dismissible

Параметр `dismissible` добавляет кнопку закрытия внутри `u-alert` компонента.
Нажатие на эту кнопку установит занчение `false` для компонента `u-alert` и фактически скроет его.
Вы можете восстановить отображение компонента, привязав `v-model` со значением `true`.

<docs-demo vertical stretch>

<u-alert variant="success" icon="mdi-check" dismissible>Success вариант предупреждения c возможностью закрытия</u-alert>

</docs-demo>

```vue
<u-alert variant="success" icon="mdi-check" dismissible>Success вариант предупреждения c возможностью закрытия</u-alert>
```