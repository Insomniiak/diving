# PostgreSQL

### User

| Name   | type   |
| :----: | :----: |
| id     | uuid |
| providerList | ForeignKey |
| permissions | array[strings] |
| info   | jsonB |
| createdAt | date |
| updatedAt | date |

### ProvidersList

| Name | type |
| :----: | :----: |
| id | uuid |
| userId | foreignKey |
| github | foreignKey |
| slack | foreignKey |
| manual | foreignKey |
| ... | ... |
| createdAt | date |
| updatedAt | date |

## Providers

### Github

| Name | type |
| :----: | :----: |
| id | uuid |
| userId | ForeignKey |
| access_token | string |
| createdAt | date |
| updatedAt | date |

### Manual

| Name | type |
| :----: | :----: |
| id | uuid |
| userId | ForeignKey |
| userEmail | string |
| password | string |
| access_token | string |
| createdAt | date |
| updatedAt | date |
