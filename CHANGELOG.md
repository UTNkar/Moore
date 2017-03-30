# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- Notification on unconfirmed e-mail addresses
- Membership status for all members. It checks against the UTN registry.
- Cron Tasks
### Changed
- Creating and editing positions is now sensitive to access rights.
- The logo model is now situated in the branding app.
- Phone number has been added to the registration form.
- Combine birthday and person number extension within the admin forms.
### Fixed
- Editing and creation rights in recruitment for officials
- Allow submitting an application without changing a draft
- Logos in the organisational menu now link to their given link
- The organisational menu is displayed correctly when no logos are available.
- The access rights for members of teams designated as an approval committee

## [0.1.0] - 2017-03-27
### Added
- Django framework basics
- Wagtail CMS system
- Material design
- Member accounts and related information
- First version of the application system


[Unreleased]: https://github.com/UTNkar/moore/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/UTNkar/moore/compare/8210c5175bcca87d9f012e49d090c8bec687c672...v0.1.0
