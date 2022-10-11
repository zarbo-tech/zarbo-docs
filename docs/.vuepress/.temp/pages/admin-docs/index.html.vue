<template><div><h1 id="руководство-администратора" tabindex="-1"><a class="header-anchor" href="#руководство-администратора" aria-hidden="true">#</a> Руководство администратора</h1>
<p><strong>Zarbo</strong></p>
<p>Руководство администратора</p>
<h1 id="_1-вход-в-систему" tabindex="-1"><a class="header-anchor" href="#_1-вход-в-систему" aria-hidden="true">#</a> 1.Вход в систему.</h1>
<p>Для входа в систему администрирования «Zarbo» используется следующая ссылка: <a href="https://api.zarbo.tech/admin/billing/" target="_blank" rel="noopener noreferrer">https://api.zarbo.tech/admin/billing/<ExternalLinkIcon/></a></p>
<p>После входа в систему откроется поле регистрации.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_b45bdd1a4a7cdca0.png" alt="" loading="lazy"></p>
<p>После ввода логина и пароля требуется нажать кнопку Login.</p>
<h1 id="_2-описание-панели" tabindex="-1"><a class="header-anchor" href="#_2-описание-панели" aria-hidden="true">#</a> 2.Описание панели.</h1>
<p>Панель администрирования состоит из сгруппированных строк, каждая из которых отвечает за свои функции администрирования.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_b22fe95b5da81d7d.png" alt="" loading="lazy"></p>
<table>
<thead>
<tr>
<th><strong>Заголовок</strong></th>
<th><strong>Описание</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://api.zarbo.tech/admin/authtoken/tokenproxy/" target="_blank" rel="noopener noreferrer"><strong>Tokens</strong><ExternalLinkIcon/></a></td>
<td>-</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/auth/group/" target="_blank" rel="noopener noreferrer"><strong>Groups</strong><ExternalLinkIcon/></a></td>
<td>-</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/auth/user/" target="_blank" rel="noopener noreferrer"><strong>Users</strong><ExternalLinkIcon/></a></td>
<td>Список пользователей системы</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/billing/paymentmethod/" target="_blank" rel="noopener noreferrer"><strong>Payment methods</strong><ExternalLinkIcon/></a></td>
<td>-</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/billing/payment/" target="_blank" rel="noopener noreferrer"><strong>Payments</strong><ExternalLinkIcon/></a></td>
<td>-</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/billing/planquote/" target="_blank" rel="noopener noreferrer"><strong>Plan quotes</strong><ExternalLinkIcon/></a></td>
<td>Список квот каждого тарифа</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/billing/plan/" target="_blank" rel="noopener noreferrer"><strong>Plans</strong><ExternalLinkIcon/></a></td>
<td>Список тарифных планов</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/billing/price/" target="_blank" rel="noopener noreferrer"><strong>Prices</strong><ExternalLinkIcon/></a></td>
<td>Список прайсов</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/billing/quote/" target="_blank" rel="noopener noreferrer"><strong>Quotes</strong><ExternalLinkIcon/></a></td>
<td>Список всех квот</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/billing/subscription/" target="_blank" rel="noopener noreferrer"><strong>Subscriptions</strong><ExternalLinkIcon/></a></td>
<td>Список компаний в системе с их тарифами и возможностями</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/scheduler/cronjob/" target="_blank" rel="noopener noreferrer"><strong>Cron Jobs</strong><ExternalLinkIcon/></a></td>
<td>-</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/scheduler/repeatablejob/" target="_blank" rel="noopener noreferrer"><strong>Repeatable Jobs</strong><ExternalLinkIcon/></a></td>
<td>-</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/scheduler/scheduledjob/" target="_blank" rel="noopener noreferrer"><strong>Scheduled Jobs</strong><ExternalLinkIcon/></a></td>
<td>-</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/django_rq/queue/" target="_blank" rel="noopener noreferrer"><strong>Queues</strong><ExternalLinkIcon/></a></td>
<td>-</td>
</tr>
<tr>
<td><a href="https://api.zarbo.tech/admin/profile/profile/" target="_blank" rel="noopener noreferrer"><strong>Profiles</strong><ExternalLinkIcon/></a></td>
<td>Список всех профилей в системе</td>
</tr>
</tbody>
</table>
<h1 id="_3-создание-нового-подписчика" tabindex="-1"><a class="header-anchor" href="#_3-создание-нового-подписчика" aria-hidden="true">#</a> 3.Создание нового подписчика.</h1>
<p>Для создания нового подписчика требуется нажать на поле Subscriptions.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_937e8714c65df16.png" alt="" loading="lazy"></p>
<p>Откроется список компаний-подписчиков системы. Чтобы добавить новую компанию, нужно нажать кнопку add Subscription в правом верхнем углу экрана.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_b35f2e39bec14cf.png" alt="" loading="lazy"></p>
<p>При создании новой подписки требуется нажать кнопку «+» справа от поля user.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_f1d51ba42922c707.png" alt="" loading="lazy"></p>
<p>Открывшаяся форма создания пользователя должна быть заполнена, после чего требуется нажать save.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_339dda0423d00d12.png" alt="" loading="lazy"></p>
<p>Поле Prise заполняется выбором из списка доступных полей, прайс зависит от подписки нового пользователя.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_d06c22f60736e09f.png" alt="" loading="lazy"></p>
<p>Поле status позволяет выбрать статус оплаты.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_1d0f57ab418b8585.png" alt="" loading="lazy"></p>
<p>После заполнения формы требуется нажать кнопку SAVE. После этого откроется страница со списком подписчиков.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_feb9e76200429a48.png" alt="" loading="lazy"></p>
<h1 id="_4-удаление-подписчика" tabindex="-1"><a class="header-anchor" href="#_4-удаление-подписчика" aria-hidden="true">#</a> 4.Удаление подписчика.</h1>
<p>Для удаления подписчика требуется в списке подписчиков нажать на id нужного подписчика и нажать на кнопку DELETE.</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_aaa706a4a7c70b5d.png" alt="" loading="lazy"></p>
<p>После этого требуется нажать кнопку «Yes, I'm sure»/</p>
<p><img src="RackMultipart20221011-1-rjdkp3_html_e5cd5d570c19b199.png" alt="" loading="lazy"></p>
</div></template>


