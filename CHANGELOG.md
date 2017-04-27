# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- Searching within involvement admin will now search more fields.
- A new form field type for person numbers
- Inspection view for Position, showing applicants
### Changed
- Switch to the materialize CSS/JS framework.
- Election contact e-mail has been moved to the Role model and has been labeled as such.
- Contact information of team members is now available in the Team inspection view.
### Removed
- Old migrations in the website app.
### Fixed
- Searching for positions within the admin interface will no longer cause an error.
- Allow person numbers to be "T-numbers".
- Several instances where dirrty wasn't triggered at the right time.
- Improved queries for loading positions.
- Disallow creating roles outside your team.

## [0.2.0] - 2017-04-07
### Added
- Inclusion and Exclusion of teams within a recruitment page.
- Inspection view for Teams to show the current members of a Team.
- A cron task to automate setting of access Group associated with Team.
### Changed
- Term of office is now visible in 'my applications'.
- Change the login button to be more visible.
### Removed
- Study program abbreviations.
### Fixed
- Update 'Account settings' translation for Swedish.
- Social Media Icons where not being displayed.

## [0.1.3] - 2017-04-06
### Fixed
- Use display value for degree for StudyProgram string method.
- Translate person number label where applicable
- Empty height of the organisational menu now matches the filled height.
- Initial selection of study is maintained when on section selection.
- Naming of position with double years if the span is over two years.
- Membership status is now shown when approving and appointing members.
- The role to string method is now correctly translated.

## [0.1.2] - 2017-04-01
### Added
- Section model, linked to study programs and users
- FontAwesome support within wagtail icons
### Changed
- Study has been removed from the registration page. Members will instead be
asked to extend their profile in the registration email.
### Fixed
- Confirmation emails not being sent.
- Updated translations
- Production: cross-domain cookies
- Makes the membership API more reliable

## [0.1.1] - 2017-03-30
### Added
- Notification on unconfirmed email addresses
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
- The access rights for members of teams designated as an approval committee.

## [0.1.0] - 2017-03-27
### Added
- Django framework basics
- Wagtail CMS system
- Material design
- Member accounts and related information
- First version of the application system


[Unreleased]: https://github.com/UTNkar/moore/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/UTNkar/moore/compare/v0.1.3...v0.2.0
[0.1.3]: https://github.com/UTNkar/moore/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/UTNkar/moore/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/UTNkar/moore/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/UTNkar/moore/compare/8210c5175bcca87d9f012e49d090c8bec687c672...v0.1.0
