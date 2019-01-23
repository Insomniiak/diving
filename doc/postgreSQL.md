# PostgreSQL

### User

| Name   | type   |
| :----: | :----: |
| UserId | uuid |
| ProvidersList | ForeignKey(listId).in(ProvidersList) |
| Permissions | array[strings] |
| Info   | jsonB |
| CreatedAt | date |
| UpdatedAt | date |

### ProvidersList

| Name | type |
| :----: | :----: |
| ListId | uuid |
| UserId | foreignKey(userId).in(User) |
| GithubId | foreignKey(githubId).in(GithubProvider) |
| SlackId | foreignKey(slackId).in(SlackProvider) |
| ManualId | foreignKey(manualId).in(ManualProvider) |
| ... | ... |
| CreatedAt | date |
| UpdatedAt | date |

## Providers

### Github

| Name | type |
| :----: | :----: |
| GithubId | uuid |
| UserId | ForeignKey(userId).in(user) |
| GithubUserId | uuid |
| AccessToken | string |
| CreatedAt | date |
| UpdatedAt | date |

### Manual

| Name | type |
| :----: | :----: |
| ManualId | uuid |
| UserId | ForeignKey(userId).in(user) |
| UserEmail | string |
| Password | string |
| AccessToken | string |
| CreatedAt | date |
| UpdatedAt | date |
