# 4. Управление продуктами

## Создание коллекции

![](./img/image5.png)

`Рис 5. Главная страница`

Для создания нового продукта сначала требуется создать коллекцию, нажав на кнопку «Создать коллекцию» вверху страницы.

Создавая новую коллекцию, требуется ввести название коллекции.

![](./img/image6.png)

`Рис 6. Создание коллекции`

## Новый продукт

В созданной коллекции требуется нажать на кнопку «создать продукт».

![](./img/image7.png)

`Рис 7. Панель коллекции`

Первым шагом в создании нового продукта является ввод названия и уникального идентификатора (артикула). После их ввода требуется нажать «Далее».

![](./img/image8.png)

`Рис 8. Создание продукта`

## Загрузка модели

Следующий шаг – загрузка модели. Требуется нажать на поле загрузки и выбрать в открывшемся файловом проводнике необходимую модель, или перетащить значок модели в область загрузки. Система принимает четыре типа файлов с моделями продукта. Поддерживаемые форматы представлены в Таблице 1.

<!-- title only -->
<h4 align="center"> Типы файлов моделей</h4>

| Расширение файла | Описание |
| --- | --- |
| **Obj** | Основной тип файлов моделей, для корректного отображения требуется провести конвертацию в иные форматы |
| **Glb/Gltf** | Форматы модели, необходимые для отображения продукта на сайте и в системе Android. |
| **Usdz** | Формат модели, поддерживаемый операционной системой IOS. |
| **Fbx** | Обменный формат 3Ds Max |

Для корректного отображения модели также установлены граничные условия. При нарушении данных условий модель может отображаться некорректно или не четко:

- В одном загружаемом файле должно быть не более одной модели.
- Модель не должна быть "тяжёлой". (предел – 10000 полигонов и 25 мб).
- Развёртка текстур должна соответствовать развёртке модели, натяжений быть не должно.
- Для реалистичного отображения модели должны быть представлены минимум три карты текстур: Base color, Normal и Metallic-Roughness. В карте текстур Metallic-Roughness металлические поверхности должны быть отмечены зелёным, неметаллические – синим.

![](./img/image9.png)

`Рис 9. Поле загрузки модели`

После загрузки модели требуется нажать на кнопку автоматической конвертации, если нет моделей всех необходимых расширений.

![](./img/image10.png)

`Рис 10. Конвертация моделей`

Если предполагается демонстрация продукта на слабых платформах, после конвертации модели требуется преобразовать отображение продукта в более «легкую» форму. Для этого над окном представления модели расположена кнопка **«адаптив»**.

**L** Это наиболее чёткая, но и наиболее массивная в плане обработки и представления модель. Отображение модели на слабых платформах может занять долгое время.

**M** Среднее качество модели. Обработка и отображение на слабых платформах займёт меньше времени, но и чёткость трёхмерного изображения будет ниже.

**S** Модель низкого качества. Малая чёткость, но отображается на любых устройствах.

По умолчанию формируется модель наиболее высокого качества. При нажатии на значок качества модели будет открыто диалоговое окно создания упрощённого представления.

![](./img/image11.png)

`Рис 11. Окно создания модели низкого качества`

После завершения конвертации модели пользователь может скачать результат в любом из представленных форматов, нажав на кнопку с расширением файла модели справа. Кнопка «удалить все модели» позволяет удалить все файлы модели.

![](./img/image12.png)

`Рис 12. Форма скачивания конвертированных моделей.`

## Создание текстур

Поле управления материалами позволяет загрузить необходимые текстуры на существующий объект. Для привязки текстур к модели требуется создать коллекцию текстур (материал), нажав на кнопку «создать материал» в левом-нижнем углу.

![](./img/image13.png)

`Рис 13. Страница управления материалами`

Создание материала требует ввода названия материала, ввода кода материала (артикул каждого отдельного набора текстур, уникальный для каждого материала) и загрузки фотографии с превью необходимого узора.

![](./img/image14.png)

`Рис 14. Создание текстуры`

После создания набора материалов требуется в полях справа внести необходимые текстуры PBR материала в формате jpeg, чтобы применить цвета и узоры к модели. Результат применения каждого из материалов отображён в Таблице 2.

<!-- title only -->
<h4 align="center"> Типы материалов </h4>

`Таблицa 2`
| Название материала | Описание действия |
| --- | --- |
| **Base color** | Основной цвет. Цветовая гамма применяется к модели. |
| **Emission** | Излучение света, если требуется внести флуоресценцию. |
| **Metallic-Roughness** | Применение металлического отлива. Чем светлее определённая часть текстуры, тем более отражающей и «металлической» будет часть поверхности |
| **Normals** | Формирование текстурных неровностей, не отражённых на самой модели |
| **Occlusion** | Текстура теней. Позволяет сделать модель более объёмной за счёт создания теней. |

![](./img/image15.png)
`Рис 15. Привязка текстур завершена.`

Загрузив текстуры, требуется нажать кнопку «далее».

## Выбор виджетов

Поле выбора виджетов позволяет выбрать различные дополнительные возможности по управлению представлением модели. Список виджетов и результатов их применения представлен в Таблице 3.

<!-- title only -->
<h4 align="center"> Виджеты </h4>

`Таблицa 3`
| Название | Описание действия |
| --- | --- |
| **Выбор иконки** | Позволяет загрузить собственную иконку в правом нижнем углу виджета |
| **Установка материала по умолчанию** | При наличии нескольких материалов позволяет выбрать тот, который будет всегда демонстрироваться первым |
| **Превью модели** | Позволяет включить файл – заставку перед демонстрацией модели. |
| **Дополненная реальность** | Даёт возможность представить продукт в дополненной реальности. |
| **Изменение размера в дополненной реальности** | Позволяет изменять размер модели в дополненной реальности в том случае, если требуется уменьшить или увеличить продукт в AR представлении |
| **Управление камерой** | Позволяет крутить камеру вокруг продукта |
| **Логотип Зарбо** | Позволяет удалить или поставить полный логотип Зарбо в виджете. |
| **Отключить увеличение модели при обычном просмотре** | Запрещает приближение или удаление продукта при просмотре в окне |
| **Изменение материала** | Включение позволяет выбрать материал продукта, если их несколько |
| **Положение модели** | Позволяет выбрать место расположения продукта: вертикальные или горизонтальные поверхности. |

![](./img/image16.png)

`Рис 16. Панель выбора виджетов`

После выбора всех необходимых для просмотра модели функций, можно закрыть окно редактора, сохранение выполнится автоматически.

## Настройка AR представления

Система "Зарбо" предполагает использование трёх методов представления продуктов в AR пространстве.

![](./img/image17.png)

`Рис 17. Выбор представления`

<!-- title only -->
<h4 align="center"> Типы представления </h4>

`Таблицa 3`
| Наименование | Описание |
| --- | --- |
| **Web XR** | Средство просмотра для системы Андроид, имеющее расширенный функционал |
| **Scene viewer** | Более распространённое и поддерживаемое на большем числе устройств средство просмотра Андроид с ограниченным функционалом |
| **Quick look** | Средство просмотра для iOS |

## Копирование продукта

Чтобы создать копию продукта в открытой коллекции, требуется нажать кнопку « ![](./img/image18.png) ». Копия появится без виджетов и материалов.

## Удаление продукта

В коллекции продуктов напротив каждого продукта расположена кнопка « ![](./img/image19.png) ». Эта кнопка позволяет удалить уже созданный продукт. При нажатии на кнопку откроется окно подтверждения выбора, в котором требуется нажать кнопку «удалить».

![](./img/image20.png)

`Рис 18. Удаление продукта.`