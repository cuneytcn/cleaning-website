import Card from '@/components/card';
import Form from '@/components/form';
import { siteConfig } from '@/config/site.config';

export default function ContactSection() {
   return (
      <section className="py-10">
         <div className="container mx-auto px-5">
            <div className="grid gap-10 xl:grid-cols-2">
               <div className="flex flex-col">
                  <div className="text-balance">
                     <h4 className="mb-5 text-2xl font-medium opacity-80">
                        İletişim Bilgilerimiz
                     </h4>
                     <h2 className="mb-5 text-4xl font-semibold text-blue-500">
                        Konumumuzu paylaşmak istiyoruz{' '}
                        <span className="font-light">
                           bizi kolayca bulmanız için.
                        </span>
                     </h2>
                     <p className="text-neutral-6001 mb-10">
                        Sorularınız veya endişelerinizle ilgili size yardımcı
                        olmak için buradayız. Bizimle iletişime geçin, en kısa
                        sürede size geri döneceğiz.
                     </p>
                  </div>

                  <div className="grid w-full gap-5 md:grid-cols-3 xl:max-w-md xl:grid-cols-1">
                     <Card
                        img={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBjbGFzcz0iaW5qZWN0ZWQtc3ZnIiBkYXRhLXNyYz0iaHR0cHM6Ly9jZG4uaHVnZWljb25zLmNvbS9pY29ucy9sb2NhdGlvbi0wNS1zdHJva2Utcm91bmRlZC5zdmc/dj0xLjAuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHJvbGU9ImltZyIgY29sb3I9ImN1cnJlbnRDb2xvciI+CjxwYXRoIGQ9Ik0xNC41IDlDMTQuNSAxMC4zODA3IDEzLjM4MDcgMTEuNSAxMiAxMS41QzEwLjYxOTMgMTEuNSA5LjUgMTAuMzgwNyA5LjUgOUM5LjUgNy42MTkyOSAxMC42MTkzIDYuNSAxMiA2LjVDMTMuMzgwNyA2LjUgMTQuNSA3LjYxOTI5IDE0LjUgOVoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSI+PC9wYXRoPgo8cGF0aCBkPSJNMTMuMjU3NCAxNy40OTM2QzEyLjkyMDEgMTcuODE4NCAxMi40NjkzIDE4IDEyLjAwMDIgMThDMTEuNTMxIDE4IDExLjA4MDIgMTcuODE4NCAxMC43NDI5IDE3LjQ5MzZDNy42NTQzIDE0LjUwMDggMy41MTUxOSAxMS4xNTc1IDUuNTMzNzEgNi4zMDM3M0M2LjYyNTEgMy42NzkzMiA5LjI0NDk0IDIgMTIuMDAwMiAyQzE0Ljc1NTQgMiAxNy4zNzUyIDMuNjc5MzMgMTguNDY2NiA2LjMwMzczQzIwLjQ4MjYgMTEuMTUxNCAxNi4zNTM2IDE0LjUxMTEgMTMuMjU3NCAxNy40OTM2WiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xOCAyMEMxOCAyMS4xMDQ2IDE1LjMxMzcgMjIgMTIgMjJDOC42ODYyOSAyMiA2IDIxLjEwNDYgNiAyMCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD4KPC9zdmc+`}
                        title={`Ofis adresimiz`}
                        description={siteConfig.address}
                     />
                     <Card
                        img={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIGNsYXNzPSJpbmplY3RlZC1zdmciIGRhdGEtc3JjPSJodHRwczovL2Nkbi5odWdlaWNvbnMuY29tL2ljb25zL3RlbGVwaG9uZS1zdHJva2Utcm91bmRlZC5zdmc/dj0xLjAuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHJvbGU9ImltZyIgY29sb3I9IiMwMDAwMDAiPgo8cGF0aCBkPSJNNC43NDAzOCAxNC4zNjg1TDYuNjkzNTEgMTIuOTgxNkM3LjI0NDQ1IDEyLjU5MDQgNy44MDMwNSAxMi4zMjgyIDguNDQwMzQgMTIuMTU4NUM5LjE3MjAxIDExLjk2MzYgOS41IDExLjU2NDQgOS41IDEwLjcxMUM5LjUgOC41NDYyOCAxNC41IDguMzE1OTQgMTQuNSAxMC43MTFDMTQuNSAxMS41NjQ0IDE0LjgyOCAxMS45NjM2IDE1LjU1OTcgMTIuMTU4NUMxNi4yMDIgMTIuMzI5NSAxNi43NTk5IDEyLjU5MzQgMTcuMzA2NSAxMi45ODE2TDE5LjI1OTYgMTQuMzY4NUMyMC4xNDM0IDE0Ljk5NjEgMjAuNTU0NyAxNS4yOTk1IDIwLjc4NDIgMTUuNzgxOUMyMSAxNi4yMzU4IDIxIDE2Ljc2OCAyMSAxNy44MzI0QzIxIDE5Ljc0NjEgMjEgMjAuNzAzIDIwLjQ2NDIgMjEuMzE2NEMxOS44MTUyIDIyLjA1OTMgMTguMTI4IDIxLjk5NTUgMTcuMDkxNyAyMS45OTU1SDYuOTA4MzNDNS44NzE5NyAyMS45OTU1IDQuMjE5MDkgMjIuMDk4NiAzLjUzNTggMjEuMzE2NEMzIDIwLjcwMyAzIDE5Ljc0NjEgMyAxNy44MzI0QzMgMTYuNzY4IDMgMTYuMjM1OCAzLjIxNTg0IDE1Ljc4MTlDMy40NDUyNiAxNS4yOTk1IDMuODU2NjIgMTQuOTk2MSA0Ljc0MDM4IDE0LjM2ODVaIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+CjxwYXRoIGQ9Ik0xNCAxN0MxNCAxOC4xMDQ2IDEzLjEwNDYgMTkgMTIgMTlDMTAuODk1NCAxOSAxMCAxOC4xMDQ2IDEwIDE3QzEwIDE1Ljg5NTQgMTAuODk1NCAxNSAxMiAxNUMxMy4xMDQ2IDE1IDE0IDE1Ljg5NTQgMTQgMTdaIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS41Ij48L3BhdGg+CjxwYXRoIGQ9Ik02Ljk2MDE0IDMuNjk3NzJDNS42NDE3IDQuMDc0MTUgNC42OTM4NCA0LjU0MTEyIDMuODI2NDUgNS4xMDQ1NUMyLjQ1MzE4IDUuOTk2NiAxLjg2NDQzIDcuNjA0MDQgMi4wMjYwNyA5LjE1NTEzQzIuMDk0MzkgOS44MTA2OCAyLjYyMDY0IDEwLjEyNDEgMy4yMzA4OSA5Ljk1NDU1QzMuNjk0NTEgOS44MjU3MSA0LjE1ODg4IDkuNzAwMyA0LjYxOTYxIDkuNTYzNjRDNS45NjcwNiA5LjE2Mzk3IDYuMjgzOTkgOC42NzgxMiA2LjQ3MTI0IDcuMjk4ODVMNi45NjAxNCAzLjY5NzcyWk02Ljk2MDE0IDMuNjk3NzJDMTAuMjE4NiAyLjc2NzQzIDEzLjc4MTQgMi43Njc0MyAxNy4wMzk5IDMuNjk3NzJNMTcuMDM5OSAzLjY5NzcyQzE4LjM1ODMgNC4wNzQxNSAxOS4zMDYyIDQuNTQxMTIgMjAuMTczNSA1LjEwNDU1QzIxLjU0NjggNS45OTY2IDIyLjEzNTYgNy42MDQwNCAyMS45NzM5IDkuMTU1MTNDMjEuOTA1NiA5LjgxMDY4IDIxLjM3OTQgMTAuMTI0MSAyMC43NjkxIDkuOTU0NTVDMjAuMzA1NSA5LjgyNTcxIDE5Ljg0MTEgOS43MDAzIDE5LjM4MDQgOS41NjM2NEMxOC4wMzI5IDkuMTYzOTcgMTcuNzE2IDguNjc4MTIgMTcuNTI4OCA3LjI5ODg1TDE3LjAzOTkgMy42OTc3MloiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KPC9zdmc+`}
                        title={`Telefon numaramız`}
                        description={siteConfig.call.phone}
                        href={`tel:${siteConfig.call.phone}`}
                     />
                     <Card
                        img={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIGNsYXNzPSJpbmplY3RlZC1zdmciIGRhdGEtc3JjPSJodHRwczovL2Nkbi5odWdlaWNvbnMuY29tL2ljb25zL21haWwtMDEtc3Ryb2tlLXJvdW5kZWQuc3ZnP3Y9MS4wLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiByb2xlPSJpbWciIGNvbG9yPSIjMDAwMDAwIj4KPHBhdGggZD0iTTIgNkw4LjkxMzAyIDkuOTE2OTdDMTEuNDYxNiAxMS4zNjEgMTIuNTM4NCAxMS4zNjEgMTUuMDg3IDkuOTE2OTdMMjIgNiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPgo8cGF0aCBkPSJNMi4wMTU3NyAxMy40NzU2QzIuMDgxMTQgMTYuNTQxMiAyLjExMzgzIDE4LjA3MzkgMy4yNDQ5NiAxOS4yMDk0QzQuMzc2MDggMjAuMzQ0OCA1Ljk1MDMzIDIwLjM4NDMgOS4wOTg4MyAyMC40NjM0QzExLjAzOTMgMjAuNTEyMiAxMi45NjA3IDIwLjUxMjIgMTQuOTAxMiAyMC40NjM0QzE4LjA0OTcgMjAuMzg0MyAxOS42MjM5IDIwLjM0NDggMjAuNzU1MSAxOS4yMDk0QzIxLjg4NjIgMTguMDczOSAyMS45MTg5IDE2LjU0MTIgMjEuOTg0MiAxMy40NzU2QzIyLjAwNTMgMTIuNDg5OSAyMi4wMDUzIDExLjUxMDEgMjEuOTg0MiAxMC41MjQ0QzIxLjkxODkgNy40NTg4NiAyMS44ODYyIDUuOTI2MDkgMjAuNzU1MSA0Ljc5MDY2QzE5LjYyMzkgMy42NTUyMyAxOC4wNDk3IDMuNjE1NjggMTQuOTAxMiAzLjUzNjU3QzEyLjk2MDcgMy40ODc4MSAxMS4wMzkzIDMuNDg3ODEgOS4wOTg4MiAzLjUzNjU2QzUuOTUwMzMgMy42MTU2NiA0LjM3NjA4IDMuNjU1MjEgMy4yNDQ5NSA0Ljc5MDY1QzIuMTEzODIgNS45MjYwOCAyLjA4MTE0IDcuNDU4ODUgMi4wMTU3NiAxMC41MjQ0QzEuOTk0NzQgMTEuNTEwMSAxLjk5NDc1IDEyLjQ4OTkgMi4wMTU3NyAxMy40NzU2WiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPgo8L3N2Zz4=`}
                        title={`E-posta adresimiz`}
                        description={siteConfig.message.email}
                        href={`mailto:${siteConfig.message.email}`}
                     />
                  </div>
               </div>

               <div>
                  <Form />
               </div>
            </div>
         </div>
      </section>
   );
}
