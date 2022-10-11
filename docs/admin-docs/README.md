
# Руководство администратора

**Zarbo**

Руководство администратора

# 1.Вход в систему.

Для входа в систему администрирования «Zarbo» используется следующая ссылка: [https://api.zarbo.tech/admin/billing/](https://api.zarbo.tech/admin/billing/)

После входа в систему откроется поле регистрации.

![](RackMultipart20221011-1-rjdkp3_html_b45bdd1a4a7cdca0.png)

После ввода логина и пароля требуется нажать кнопку Login.

# 2.Описание панели.

Панель администрирования состоит из сгруппированных строк, каждая из которых отвечает за свои функции администрирования.

![](RackMultipart20221011-1-rjdkp3_html_b22fe95b5da81d7d.png)

| **Заголовок** | **Описание** |
| --- | --- |
| [**Tokens**](https://api.zarbo.tech/admin/authtoken/tokenproxy/) | - |
| [**Groups**](https://api.zarbo.tech/admin/auth/group/) | - |
| [**Users**](https://api.zarbo.tech/admin/auth/user/) | Список пользователей системы |
| [**Payment methods**](https://api.zarbo.tech/admin/billing/paymentmethod/) | - |
| [**Payments**](https://api.zarbo.tech/admin/billing/payment/) | - |
| [**Plan quotes**](https://api.zarbo.tech/admin/billing/planquote/) | Список квот каждого тарифа |
| [**Plans**](https://api.zarbo.tech/admin/billing/plan/) | Список тарифных планов |
| [**Prices**](https://api.zarbo.tech/admin/billing/price/) | Список прайсов |
| [**Quotes**](https://api.zarbo.tech/admin/billing/quote/) | Список всех квот |
| [**Subscriptions**](https://api.zarbo.tech/admin/billing/subscription/) | Список компаний в системе с их тарифами и возможностями |
| [**Cron Jobs**](https://api.zarbo.tech/admin/scheduler/cronjob/) | - |
| [**Repeatable Jobs**](https://api.zarbo.tech/admin/scheduler/repeatablejob/) | - |
| [**Scheduled Jobs**](https://api.zarbo.tech/admin/scheduler/scheduledjob/) | - |
| [**Queues**](https://api.zarbo.tech/admin/django_rq/queue/) | - |
| [**Profiles**](https://api.zarbo.tech/admin/profile/profile/) | Список всех профилей в системе |

# 3.Создание нового подписчика.

Для создания нового подписчика требуется нажать на поле Subscriptions.

![](RackMultipart20221011-1-rjdkp3_html_937e8714c65df16.png)

Откроется список компаний-подписчиков системы. Чтобы добавить новую компанию, нужно нажать кнопку add Subscription в правом верхнем углу экрана.

![](RackMultipart20221011-1-rjdkp3_html_b35f2e39bec14cf.png)

При создании новой подписки требуется нажать кнопку «+» справа от поля user.

![](RackMultipart20221011-1-rjdkp3_html_f1d51ba42922c707.png)

Открывшаяся форма создания пользователя должна быть заполнена, после чего требуется нажать save.

![](RackMultipart20221011-1-rjdkp3_html_339dda0423d00d12.png)

Поле Prise заполняется выбором из списка доступных полей, прайс зависит от подписки нового пользователя.

![](RackMultipart20221011-1-rjdkp3_html_d06c22f60736e09f.png)

Поле status позволяет выбрать статус оплаты.

![](RackMultipart20221011-1-rjdkp3_html_1d0f57ab418b8585.png)

После заполнения формы требуется нажать кнопку SAVE. После этого откроется страница со списком подписчиков.

![](RackMultipart20221011-1-rjdkp3_html_feb9e76200429a48.png)

# 4.Удаление подписчика.

Для удаления подписчика требуется в списке подписчиков нажать на id нужного подписчика и нажать на кнопку DELETE.

![](RackMultipart20221011-1-rjdkp3_html_aaa706a4a7c70b5d.png)

После этого требуется нажать кнопку «Yes, I'm sure»/

![](RackMultipart20221011-1-rjdkp3_html_e5cd5d570c19b199.png)