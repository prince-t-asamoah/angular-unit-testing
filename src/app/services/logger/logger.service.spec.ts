import { LoggerService } from './logger.service';

describe('LoggerService', () => {

  let loggerService: LoggerService;

  beforeEach(() => {
    loggerService = new LoggerService();
  });

  it('should start with no message', () => {
    let messagesCount = loggerService.messages.length;
    expect(messagesCount).toBe(0);
  });

  it('should add message when log is called', () => {
    loggerService.log('message');
    expect(loggerService.messages.length).toBe(1);
  });
});
